import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scroller } from "react-scroll";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const KeyboardHero = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const keyboardRef = useRef(null);
  const keysRef = useRef([]);
  const animationRef = useRef(null);
  const rendererRef = useRef(null);
  const raycasterRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2());
  const hoveredKeyRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    // Scene setup with dark gradient background
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Camera setup - much further back for proper scale (smaller view)
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(7.5, 3.2, 15.5);
    camera.lookAt(0, 0.3, 0);
    camera.updateProjectionMatrix();
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    // Raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    raycasterRef.current = raycaster;

    // Premium lighting setup - rim lighting + directional + fill
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    // Main directional light - stronger shadow contrast
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8);
    directionalLight.position.set(-5, 7, 2);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -8;
    directionalLight.shadow.camera.right = 8;
    directionalLight.shadow.camera.top = 8;
    directionalLight.shadow.camera.bottom = -8;
    directionalLight.shadow.bias = -0.0001;
    directionalLight.shadow.normalBias = 0.02;
    scene.add(directionalLight);

    // Rim light from the right - creates edge highlights
    const rimLight = new THREE.DirectionalLight(0x8b9dc3, 0.8);
    rimLight.position.set(6, 2, 3);
    scene.add(rimLight);

    // Fill light from left
    const fillLight = new THREE.DirectionalLight(0x667eea, 0.5);
    fillLight.position.set(-3, 1, 2);
    scene.add(fillLight);

    // Top light for subtle highlights
    const topLight = new THREE.DirectionalLight(0xffffff, 0.6);
    topLight.position.set(0, 8, 0);
    scene.add(topLight);

    // Add environment map for realistic reflections (premium look)
    // Create a simple environment using PMREMGenerator
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    // Create environment with dark background but subtle reflections
    const envScene = new THREE.Scene();
    envScene.background = new THREE.Color(0x050814);
    const envLight = new THREE.AmbientLight(0x404040, 0.3);
    envScene.add(envLight);
    const envLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    envLight2.position.set(1, 1, 1);
    envScene.add(envLight2);

    // Create environment texture
    const envTexture = pmremGenerator.fromScene(envScene, 0.04).texture;
    scene.environment = envTexture;
    scene.background = new THREE.Color(0x050814);

    // Clean up PMREMGenerator after creating texture
    pmremGenerator.dispose();

    // Helper function to create rounded, beveled keycap geometry
    const createRoundedKeycap = (width, height, depth, radius = 0.08) => {
      const shape = new THREE.Shape();
      const w = width / 2 - radius;
      const h = height / 2 - radius;

      // Create rounded rectangle shape
      shape.moveTo(-w, -h);
      shape.lineTo(w, -h);
      shape.quadraticCurveTo(w + radius, -h, w + radius, -h + radius);
      shape.lineTo(w + radius, h - radius);
      shape.quadraticCurveTo(w + radius, h, w, h);
      shape.lineTo(-w, h);
      shape.quadraticCurveTo(-w - radius, h, -w - radius, h - radius);
      shape.lineTo(-w - radius, -h + radius);
      shape.quadraticCurveTo(-w - radius, -h, -w, -h);

      const extrudeSettings = {
        depth: depth - radius * 2,
        bevelEnabled: true,
        bevelSegments: 12,
        steps: 2,
        bevelSize: radius,
        bevelThickness: radius * 0.8,
        curveSegments: 16,
      };

      return new THREE.ExtrudeGeometry(shape, extrudeSettings);
    };

    // Premium key material - glossy plastic finish with environment map
    const createKeyMaterial = (color, emissive = null) => {
      return new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.15,
        roughness: 0.1, // Very glossy
        emissive: emissive || 0x000000,
        emissiveIntensity: emissive ? 0.4 : 0,
        envMapIntensity: 0.7,
      });
    };

    // Helper function to add text to key
    const addTextToKey = (
      keyMesh,
      text,
      color = 0xffffff,
      rotation = 0,
      depth = 0.5
    ) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 1024;
      canvas.height = 1024;

      // Clear canvas - transparent background (NO white fill!)
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw text in white with strong black shadow for visibility
      context.fillStyle = "#FFFFFF";
      context.strokeStyle = "#000000";
      context.lineWidth = 14;
      context.shadowColor = "rgba(0, 0, 0, 0.95)";
      context.shadowBlur = 30;
      context.shadowOffsetX = 6;
      context.shadowOffsetY = 6;
      context.font = "bold 170px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.save();
      context.translate(512, 512);
      context.rotate((rotation * Math.PI) / 180);
      // Draw stroke (black outline) first, then fill (white text)
      context.strokeText(text, 0, 0);
      context.fillText(text, 0, 0);
      context.restore();

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;

      // Use MeshBasicMaterial with transparency for visibility
      const textMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.1,
        depthTest: false,
        depthWrite: false,
        side: THREE.DoubleSide,
      });

      const textPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(1.1, 1.1),
        textMaterial
      );
      // Position on top surface of key - higher offset to avoid z-fighting
      textPlane.position.set(0, depth / 2 + 0.18, 0);
      textPlane.rotation.x = -Math.PI / 2;
      // Completely disable raycasting so key mesh can be hovered/clicked
      textPlane.raycast = () => null;
      textPlane.visible = true;
      textPlane.userData.ignoreRaycast = true;
      // Remove from parent's raycast check
      textPlane.traverse = function () {};
      keyMesh.add(textPlane);
    };

    // Helper function to add icon to key
    const addIconToKey = (keyMesh, iconType, color = 0xffffff, depth = 0.5) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = 1024;
      canvas.height = 1024;

      // Clear canvas - transparent background (NO white fill!)
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw icon in bright colors with white outlines for visibility
      const iconColor = iconType === "heart" ? "#FF4444" : "#FFFFFF";
      context.fillStyle = iconColor;
      context.strokeStyle = "#FFFFFF";
      context.lineWidth = 55;

      // Add strong shadow for depth
      context.shadowColor = "rgba(0, 0, 0, 0.95)";
      context.shadowBlur = 25;
      context.shadowOffsetX = 5;
      context.shadowOffsetY = 5;

      if (iconType === "heart") {
        context.beginPath();
        context.moveTo(512, 560);
        context.bezierCurveTo(512, 480, 400, 400, 400, 480);
        context.bezierCurveTo(400, 560, 512, 640, 512, 640);
        context.bezierCurveTo(512, 640, 624, 560, 624, 480);
        context.bezierCurveTo(624, 400, 512, 480, 512, 560);
        context.fill();
        context.stroke();
      } else if (iconType === "chain") {
        context.strokeStyle = "#FFFFFF";
        context.beginPath();
        context.arc(400, 512, 130, 0, Math.PI * 2);
        context.stroke();
        context.beginPath();
        context.arc(624, 512, 130, 0, Math.PI * 2);
        context.stroke();
        context.beginPath();
        context.arc(512, 400, 130, 0, Math.PI * 2);
        context.stroke();
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;

      // Use MeshBasicMaterial with transparency for visibility
      const iconMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.1,
        depthTest: false,
        depthWrite: false,
        side: THREE.DoubleSide,
      });

      const iconPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(1.1, 1.1),
        iconMaterial
      );
      // Position on top surface of key - higher offset to avoid z-fighting
      iconPlane.position.set(0, depth / 2 + 0.18, 0);
      iconPlane.rotation.x = -Math.PI / 2;
      // Completely disable raycasting so key mesh can be hovered/clicked
      iconPlane.raycast = () => null;
      iconPlane.visible = true;
      iconPlane.userData.ignoreRaycast = true;
      // Remove from parent's raycast check
      iconPlane.traverse = function () {};
      keyMesh.add(iconPlane);
    };

    // Elevated keyboard base/plate
    const keyboardBase = new THREE.Group();

    // Base plate - reduced visual dominance
    const basePlateGeometry = new THREE.BoxGeometry(7.5, 2.8, 0.15);
    const basePlateMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f1419,
      metalness: 0.2,
      roughness: 0.6,
    });
    const basePlate = new THREE.Mesh(basePlateGeometry, basePlateMaterial);
    basePlate.position.y = -0.25;
    basePlate.receiveShadow = true;
    basePlate.castShadow = true;
    keyboardBase.add(basePlate);

    // Key configurations with actions - increased spacing for visual separation
    const keyConfigs = [
      // Row 1
      {
        x: -2.6,
        z: 0.6,
        label: "Works",
        color: 0x4a4af0,
        rotation: 45,
        size: [1.15, 1.15, 0.5],
        action: "projects",
      },
      {
        x: -1.1,
        z: 0.6,
        label: "I",
        color: 0xe0e0e0,
        size: [0.95, 0.95, 0.5],
        action: null,
      },
      {
        x: 0.1,
        z: 0.6,
        label: "",
        color: 0xe0e0e0,
        icon: "chain",
        iconColor: 0x9d4edd,
        size: [0.95, 0.95, 0.5],
        action: "linkedin",
      },
      {
        x: 1.3,
        z: 0.6,
        label: "X",
        color: 0xe0e0e0,
        size: [0.95, 0.95, 0.5],
        action: null,
      },
      {
        x: 2.7,
        z: 0.6,
        label: "Resume",
        color: 0xff8c42,
        rotation: 45,
        size: [1.15, 1.15, 0.5],
        action: "resume",
      },

      // Row 2
      {
        x: -1.45,
        z: -0.25,
        label: "U",
        color: 0xe0e0e0,
        size: [0.95, 0.95, 0.5],
        action: null,
      },
      {
        x: -0.25,
        z: -0.25,
        label: "",
        color: 0xe0e0e0,
        icon: "heart",
        iconColor: 0xff3333,
        size: [0.95, 0.95, 0.5],
        action: "github",
      },
      {
        x: 0.75,
        z: -0.25,
        label: "U",
        color: 0xe0e0e0,
        size: [0.95, 0.95, 0.5],
        action: null,
      },

      // Row 3 - Two "Hire Me" keys
      {
        x: -1.2,
        z: -1.25,
        label: "Hire Me",
        color: 0x2563eb,
        rotation: 45,
        size: [1.8, 1.15, 0.5],
        action: "footer",
      },
      {
        x: 1.2,
        z: -1.25,
        label: "Hire Me",
        color: 0x2563eb,
        rotation: 45,
        size: [1.8, 1.15, 0.5],
        action: "footer",
      },
    ];

    // Create keys with proper geometry - varied heights for realism
    const keys = [];

    keyConfigs.forEach((config, index) => {
      // Vary key height subtly for realistic surface
      const depthVariation = index % 2 === 0 ? 0.04 : -0.03;
      const keyDepth = config.size[2] + depthVariation;

      const keyGeometry = createRoundedKeycap(
        config.size[0],
        config.size[1],
        keyDepth,
        0.06
      );

      let keyMaterial;
      if (config.icon === "heart") {
        keyMaterial = createKeyMaterial(config.color, 0xff3333);
      } else {
        keyMaterial = createKeyMaterial(config.color);
      }

      const keyMesh = new THREE.Mesh(keyGeometry, keyMaterial);
      keyMesh.position.set(config.x, 0.1, config.z);
      keyMesh.castShadow = true;
      keyMesh.receiveShadow = true;
      keyMesh.userData = {
        originalColor: config.color,
        action: config.action,
        index: index,
      };

      // Add text or icon (use actual keyDepth for positioning)
      if (config.label) {
        addTextToKey(
          keyMesh,
          config.label,
          0xffffff,
          config.rotation || 0,
          keyDepth
        );
      } else if (config.icon) {
        addIconToKey(
          keyMesh,
          config.icon,
          config.iconColor || 0xffffff,
          keyDepth
        );
      }

      keyboardBase.add(keyMesh);
      keys.push(keyMesh);
    });

    // Set initial positions for animation - keyboard floats above background (centralized)
    keyboardBase.position.y = -1.0;
    keyboardBase.rotation.x = 0;
    keyboardBase.rotation.z = 0;

    // Store initial key positions for staggered animation
    const initialKeyPositions = keys.map((key, index) => ({
      y: key.position.y - (0.2 + index * 0.08),
    }));

    scene.add(keyboardBase);
    keyboardRef.current = keyboardBase;
    keysRef.current = keys;

    // Handle key actions
    const handleKeyAction = (action) => {
      if (!action) return;

      switch (action) {
        case "projects":
          scroller.scrollTo("projects", { smooth: true, duration: 800 });
          break;
        case "resume":
          window.open(
            "https://drive.google.com/file/d/1haqJUe181JJTxl5qwORL1citM6-pOi0F/view?usp=sharing",
            "_blank"
          );
          break;
        case "footer":
          scroller.scrollTo("footer", { smooth: true, duration: 800 });
          break;
        case "linkedin":
          window.open(
            "https://www.linkedin.com/in/chandan-thakur-969703250/",
            "_blank"
          );
          break;
        case "github":
          window.open("https://github.com/ThatGuyChandan", "_blank");
          break;
        default:
          break;
      }
    };

    // Mouse move handler for hover effects
    const onMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseRef.current, camera);
      // Only intersect key meshes, not children (text/icon planes)
      const intersects = raycaster.intersectObjects(keys, false);

      // Reset previous hover
      if (
        hoveredKeyRef.current &&
        hoveredKeyRef.current !== intersects[0]?.object
      ) {
        const prevKey = hoveredKeyRef.current;
        gsap.to(prevKey.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(prevKey.position, {
          y: 0.1,
          duration: 0.25,
          ease: "power2.out",
        });
        canvas.style.cursor = "default";
      }

      // Hover new key - ALL keys should be hoverable (both with and without actions)
      if (intersects.length > 0) {
        const hoveredKey = intersects[0].object;
        hoveredKeyRef.current = hoveredKey;

        // Always show hover effect for all keys
        canvas.style.cursor = hoveredKey.userData.action
          ? "pointer"
          : "default";
        gsap.to(hoveredKey.scale, {
          x: 1.08,
          y: 1.08,
          z: 1.08,
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(hoveredKey.position, {
          y: 0.25,
          duration: 0.25,
          ease: "power2.out",
        });
      } else {
        hoveredKeyRef.current = null;
        canvas.style.cursor = "default";
      }
    };

    // Click handler
    const onMouseClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouseRef.current, camera);
      // Only intersect key meshes, not children (text/icon planes)
      const intersects = raycaster.intersectObjects(keys, false);

      if (intersects.length > 0) {
        const clickedKey = intersects[0].object;
        const action = clickedKey.userData.action;
        if (action) {
          // Subtle press animation
          gsap.to(clickedKey.position, {
            y: 0.05,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
          });
          handleKeyAction(action);
        }
      }
    };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("click", onMouseClick);

    // Premium animation setup with GSAP ScrollTrigger - smooth, no bouncing
    const setupAnimation = () => {
      const homeSection = document.getElementById("home");
      if (!homeSection) {
        setTimeout(setupAnimation, 100);
        return;
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: homeSection,
          start: "top top",
          end: "+=600",
          scrub: 1,
        },
      });

      // Main keyboard animation: rise and tilt forward (premium easing, centralized)
      timeline.to(keyboardBase.position, {
        y: 0.5,
        duration: 1,
        ease: "power2.inOut",
      });

      timeline.to(
        keyboardBase.rotation,
        {
          x: -0.12,
          z: 0.08,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );

      // Staggered animation for individual keys - smooth, no bounce
      keys.forEach((key, index) => {
        const initialY = initialKeyPositions[index].y;
        gsap.set(key.position, { y: initialY });

        timeline.to(
          key.position,
          {
            y: 0.1,
            duration: 0.4,
            ease: "power2.out",
          },
          index * 0.04
        );
      });

      animationRef.current = timeline;
    };

    setupAnimation();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("click", onMouseClick);
      window.removeEventListener("resize", handleResize);

      if (animationRef.current) {
        animationRef.current.kill();
      }

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      // Dispose of geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((mat) => {
                if (mat.map) mat.map.dispose();
                mat.dispose();
              });
            } else {
              if (object.material.map) object.material.map.dispose();
              object.material.dispose();
            }
          }
        }
      });

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ display: "block", cursor: "default" }}
      />
    </div>
  );
};

export default KeyboardHero;
