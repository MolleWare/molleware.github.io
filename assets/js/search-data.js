// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-cpp-tools",
          title: 'cpp_tools',
          description: "A header only Test library for smaller c++ projects.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Header_Only_Test_lib/";
            },},{id: "projects-eole-3000-vxl",
          title: 'Eole 3000/VXL',
          description: "The Eole 3000/VXL project is the process of industrialising a refactored codebase while integrating prototyped changes to the mechanical, hydrolics and electronics of the tool.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Pulve_EOLE_3000_vxl/";
            },},{id: "projects-json-editor",
          title: 'JSON Editor',
          description: "An automated configuration tool that eliminated the need for on-site developer assistance during SPV3 machine setup and deployment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/json_editor/";
            },},{id: "projects-mode-analyse",
          title: 'Mode Analyse',
          description: "An introspection tool that enabled technicians and developers to visualize the behavior of object classification algorithms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mode_analyse/";
            },},{id: "projects-norac",
          title: 'Norac',
          description: "Integration of a radar-based ground-following system for the Eole 2000/3000 spraying tool, replacing ultrasonic sensors to improve crop navigation and spraying accuracy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/norac_integration/";
            },},{id: "projects-spion",
          title: 'Spion',
          description: "A tool to reduce development and debugging time by providing real-time telemetry and enabling the writing of properties to variables in a program running on an embedded device.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spion/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%75%67%6F.%6D%6F%6C%6C%65@%70%72%6F%74%6F%6E%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MolleWare", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hugo-molle", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
