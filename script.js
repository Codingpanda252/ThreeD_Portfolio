document.addEventListener('DOMContentLoaded', function () {
    // Blur background effect on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            document.body.classList.add('blur-background');
        } else {
            document.body.classList.remove('blur-background');
        }
    });

    // Array of graphic projects
    const graphicProjects = [
        { 
            name: "Paytm", 
            description: "Paytm Brand Illustration", 
            img: "assets/images/PaytmBrandIllustration.png" 
        },
        { 
            name: "EDC, MAIT", 
            description: "Entrepreneurship Development Cell, MAIT Brochure", 
            img: "assets/images/EDCMAIT.png", 
            pdf: "assets/EDCMAIT.pdf" 
        },
        { 
            name: "AWS Cloud Club", 
            description: "AWS Cloud Club Illustrative Artwork", 
            img: "assets/images/AWSCloudClub.png",
            video: "assets/AWSCloudClub.mp4" 
        },
        { 
            name: "Reminiscing Moments Together", 
            description: "Reminiscing Moments Together Farewell Collage", 
            img: "assets/images/FarewellCollage.png" 
        },
        { 
            name: "VaayuSense", 
            description: "VaayuSense: The Mask that Monitors", 
            img: "assets/images/VaayuSense.png", 
            figmaUrl: "https://www.figma.com/proto/XUnTV6mGNKp4cLxgglIWuj/SIH-Phod-Denge?node-id=10-2&t=2S9Mh8KItSa3pD8E-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=10%3A3"
        },
        { 
            name: "Nidarr Women Safety", 
            description: "Nidarr Women Safety", 
            img: "assets/images/NidarrApp.png", 
            figmaUrl: "https://www.figma.com/proto/ZO6ON9Xyk8avPtCkdCHWTk/Women-app-gui?node-id=30-1109&t=ysLN7GaZx2eAh6hk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=30%3A1109"
        },
        { 
            name: "HackwithMAIT 4.0", 
            description: "HackwithMAIT 4.0 Official Video",
            img: "assets/images/HackwithMAIT.png",
            video: "assets/HackwithMAIT.mp4" 
        },
    ];

    // Array of 3D projects
    const threeDProjects = [
        { 
            name: "Pokeball 3D", 
            description: "Pokeball 3D Artwork with HDRI", 
            img: "assets/images/Pokeball.png" 
        },
        { 
            name: "Rubik's Cube 3D", 
            description: "Rubik's Cube 3D Artwork with HDRI", 
            img: "assets/images/RubiksCube.png" 
        },
        { 
            name: "Perfume 3D", 
            description: "Perfume 3D Artwork with HDRI", 
            img: "assets/images/Perfume3D.png" 
        },
        { 
            name: "Raj Soin Hall 3D", 
            description: "Raj Soin Hall, DTU 3D Architecture", 
            img: "assets/images/RajSoinhallDTU.jpeg" 
        }
    ];

    const techLogos = [
        { src: "assets/logos/blender-logo.png", alt: "Blender" },
        { src: "assets/logos/canva-logo.png", alt: "Canva" },
        { src: "assets/logos/figma-logo.png", alt: "Figma" },
        { src: "assets/logos/premiere-pro-logo.png", alt: "Premiere Pro" },
        { src: "assets/logos/after-effects-logo.png", alt: "After Effects" },
        { src: "assets/logos/photoshop-logo.png", alt: "Photoshop" },
    ];

    // Container elements
    const graphicContainer = document.getElementById('graphic-projects');
    const threeDContainer = document.getElementById('3d-projects');
    const techStackContainer = document.getElementById('tech-stack');

    // Function to create a PDF link element
    function createPdfLink(pdfPath) {
        const pdfLink = document.createElement('a');
        pdfLink.href = pdfPath;
        pdfLink.textContent = "Download Brochure";
        pdfLink.target = "_blank";
        pdfLink.classList.add('pdf-link');
        return pdfLink;
    }

    // Function to create a video element
    function createVideoElement(videoPath) {
        const videoElement = document.createElement('video');
        videoElement.src = videoPath;
        videoElement.type = "video/mp4";
        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.muted = true;
        videoElement.controls = null; // Remove default controls
        videoElement.classList.add('project-video');
        return videoElement;
    }

    // Function to create a Figma iframe
    function createFigmaIframe(figmaUrl, isLarge = false) {
        const iframeElement = document.createElement('iframe');
        iframeElement.style.border = "1px solid rgba(0, 0, 0, 0.1)";
        iframeElement.width = isLarge ? "800" : "190"; // Adjust width based on project
        iframeElement.height = isLarge ? "450" : "200"; // Adjust height based on project
        iframeElement.src = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;
        iframeElement.allowfullscreen = true;
        return iframeElement;
    }

    // Create graphic projects
    graphicProjects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        // Add image
        if (project.img) {
            const imgElement = document.createElement('img');
            imgElement.src = project.img;
            imgElement.alt = project.name;
            projectElement.appendChild(imgElement);
        }

        // Add video
        if (project.video) {
            const videoElement = createVideoElement(project.video);

            const overlayElement = document.createElement('div');
            overlayElement.classList.add('overlay');

            const textElement = document.createElement('div');
            textElement.classList.add('text');
            textElement.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;

            overlayElement.appendChild(videoElement);
            overlayElement.appendChild(textElement);
            projectElement.appendChild(overlayElement);
        } 
        // Add Figma iframe
        else if (project.figmaUrl) {
            const overlayElement = document.createElement('div');
            overlayElement.classList.add('overlay');

            const isLarge = project.name === "Nidarr Women Safety"; // Adjust size based on project
            const figmaIframe = createFigmaIframe(project.figmaUrl, isLarge);
            overlayElement.appendChild(figmaIframe);

            const textElement = document.createElement('div');
            textElement.classList.add('text');
            textElement.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;

            overlayElement.appendChild(textElement);
            projectElement.appendChild(overlayElement);
        } 
        // Default overlay with text and PDF link if available
        else {
            const overlayElement = document.createElement('div');
            overlayElement.classList.add('overlay');

            const textElement = document.createElement('div');
            textElement.classList.add('text');
            textElement.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;

            if (project.pdf) {
                const pdfLink = createPdfLink(project.pdf);
                overlayElement.appendChild(pdfLink);
            }

            overlayElement.appendChild(textElement);
            projectElement.appendChild(overlayElement);
        }

        // Append project element to container
        graphicContainer.appendChild(projectElement);
    });

    // Create 3D projects
    threeDProjects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');

        // Add image
        const imgElement = document.createElement('img');
        imgElement.src = project.img;
        imgElement.alt = project.name;

        // Add overlay with text
        const overlayElement = document.createElement('div');
        overlayElement.classList.add('overlay');

        const textElement = document.createElement('div');
        textElement.classList.add('text');
        textElement.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;

        overlayElement.appendChild(textElement);
        projectElement.appendChild(imgElement);
        projectElement.appendChild(overlayElement);

        threeDContainer.appendChild(projectElement);
    });
    
    techLogos.forEach(logo => {
        const logoImg = document.createElement('img');
        logoImg.src = logo.src;
        logoImg.alt = logo.alt;
        logoImg.classList.add('tech-logo');
        logoImg.title = logo.alt; 
        techStackContainer.appendChild(logoImg);
    });
    

});
