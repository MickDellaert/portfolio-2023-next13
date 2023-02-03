// const testProjects = [
//   {
//     id: 1,
//     urlName: "kuli",
//     name: "Kuli project",
//     description:
//       "Kuli website made during the Hack Your Future graduation project.",
//     linkLive: "https://kuli-hyf.netlify.app/",
//     linkName: "Visit website",
//     linkGit: "https://github.com/Kuli-HYF",
//     mainImage: "/kuli/kuli-cropped.jpg",
//     detailImage: ["/kuli/kuli-home-companies.jpg", "/kuli/kuli-ipad-login.jpg"],
//     Icon: ["SiStrapi", "SiReact", "SiPostgresql"],
//   },
//   {
//     id: 2,
//     urlName: "kittychat",
//     name: "KittyChat",
//     description:
//       "A silly themed chat application for all your kitty cat chats, with emoji toggle drawer. Built with Express and socket.io.",
//     linkLive: "https://kittychat.onrender.com/",
//     linkName: "Demo",
//     linkGit: "https://github.com/MickDellaert/chatroom-exercise",
//     mainImage: "/KittyChat/kittychat-cropped.jpg",
//     detailImage: [
//       "/KittyChat/kittychat-mockup-phone-blauw.jpg",
//       "/KittyChat/kittychat-blauw.jpg",
//     ],
//     Icon: ["SiJavascript", "SiExpress", "SiSocketdotio"],
//   },
// ];

// export async function getTestProjects() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(testProjects);
//     }, 1000);
//   });
// }


// async function fetcher() {
//   const data = await fetch(url);
//   const response = await response.json();
//   console.log( data);
// }

// export async function generateStaticParams() {

//   // const { data, error } = useSWR("/api/staticdata", fetcher);

//   const projects = await getTestProjects();

//   return projects.map((project) => ({
//     id: project.urlName,
//   }));
// }