<template>
    <div class="col-lg-3 col-md-6 wow fadeInUp" v-bind:data-wow-delay="delay">
      <div class="team-item">
        <div class="overflow-hidden">
          <img class="img-fluid" :src="member.imgSrc" :alt="member.name">
        </div>
        <div class="position-relative d-flex justify-content-center" style="margin-top: -19px;">
          <a class="btn btn-square mx-1" v-for="(link, index) in member.socialLinks" :key="index" :href="link.url">
            <i :class="link.iconClass"></i>
          </a>
        </div>
        <div class="text-center p-4">
          <h5 class="mb-0">{{ member.name }}</h5>
          <small>{{ member.designation }}</small>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['member', 'delay']
  }
  </script>
  