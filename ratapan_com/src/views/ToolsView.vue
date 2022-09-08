<!-- changeTheme() -->
<template>
  <div>
    <br />
    <h1 class="title-main">
      Hice algunas herramientas que te pueden interesar
    </h1>
    <br />
    <section v-for="(report, i) in reports" :key="i">
      <SectionReport :report="report" />
      <br />
    </section>
  </div>
</template>
<script>
import SectionReport from "@/components/section/ReportSection.vue";
export default {
  name: "Tools",
  components: {
    SectionReport,
  },
  data() {
    return {
      reports: [
        {
          imgs: [
            "https://ratapan.com/repo/Imgs/tools/imageToWebp1.jpeg",
            "https://ratapan.com/repo/Imgs/tools/imageToWebp2.jpeg",
          ],
          title: "Imagen/* a webp",
          text: `Este mini proyecto lo realicé con el fin de dar solución a una pregunta, a la que yo, no encontré solución de primera mano en Stack Overflow. ¿Cómo puedo transformar una imagen de un formato "Normal" (.png, .jepg ,  .jpg , etc) a formato Webp?, luego de un rato me di cuenta de que era buena idea el uso de fetch para leer el base64 de la imagen original, para posteriormente pintarlo en un canvas y terminar extrayéndolo en un formato Webp.`,
          links: [
            {
              name: "GitHub 😺",
              link: "https://github.com/Ratapan/My-Docu/blob/main/javascript/vanilla/transforms.md",
            },
            {
              name: "Demo 🦝",
              link: "https://ratapan.com/repo/pages/imagesToWebp.html",
            },
          ],
          orientation: "",
        },
        {
          imgs: [
            "https://ratapan.com/repo/Imgs/tools/fetchGet1.png",
          ],
          title: "Get fetch",
          text: `Estando en una clase, no sabía como explicarle a un compañero que era una api, así que en vista de esta situación, se me ocurrió la idea de hacer un ejemplo de consumo, ocupando una api de un menú restauran que se encuentra pública.`,
          links: [
            {
              name: "GitHub 😺",
              link: "https://github.com/Ratapan/My-Docu/blob/main/javascript/vanilla/fetchExample.md",
            },
            {
              name: "Demo 🦝",
              link: "https://ratapan.com/repo/pages/fetchRestaurant.html",
            },
          ],
          orientation: "r",
        },
      ],
    };
  },
  methods: {
   
  },
};
</script>
