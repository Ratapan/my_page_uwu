<!-- changeTheme() -->
<template>
  <div>
    <br />
    <div>
      <div class="box-fles-line">
        <h1 class="title-main">Hola, soy Javier Sabando</h1>
        <div class="move title-main">🖐</div>
      </div>
    </div>
    <br />
    <Box :text="box_text" :img="box_img" :orientation="box_orientation" />
    <br />

    <Grid :items="rrss" />
  </div>
</template>
<script>
import Box from "../components/tools/InfoBoxTool.vue";
import Grid from "../components/layout/oneGridLayout.vue";
export default {
  name: "About",
  components: {
    Box,
    Grid,
  },
  data() {
    return {
      box_text: `Soy un titulado de Analista Programador Computacional y estudiante de Ingeniería Informática, con un año de experiencia laboral, como front-developer. Me gusta la programación web, el diseño de interfaces y el manejo de datos. Fui líder en mis equipos de estudio los ultimos 3 años, manejo, Vuejs, Node, Scss, Python y worck flows como GitHub, Notion, Monday y Trello.`,
      box_img: "imgs/image-profile.webp",
      box_orientation: "l",
      rrss: [
        {
          name: "YouTube",
          img: "https://cdn-icons-png.flaticon.com/512/174/174883.png",
          link: "https://www.youtube.com/channel/UC0TaqwXpQA4hPizwMaHeaSA",
        },
        {
          name: "GitHub",
          img: "https://ratapan.com/repo/Imgs/icons/github.png",
          link: "https://www.youtube.com/channel/UC0TaqwXpQA4hPizwMaHeaSA",
        },
        {
          name: "Linkedin",
          img: "https://ratapan.com/repo/Imgs/icons/linkedin.png",
          link: "https://www.linkedin.com/in/javier-sabando/",
        },
        {
          name: "Instagram",
          img: "https://ratapan.com/repo/Imgs/icons/instagram.png",
          link: "https://www.instagram.com/_ratapan_/",
        },
      ],
    };
  },
  mounted() {},
  methods: {},
};
</script>
