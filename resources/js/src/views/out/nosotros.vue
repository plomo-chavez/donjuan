<template>
    <TemplateOut>
        <Jumbo />
        <About />
        <!-- Team Start -->
        <div class="container-xxl py-5">
            <div class="container-md">
                <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h1 class="mb-5">Meet Our Guide</h1>
                </div>
                <div class="row g-4">
                    <TeamMember 
                      v-for="(member, index) in teamMembers" 
                      :key="member.id" 
                      :member="member" 
                      :delay="`0.${index + 1}s`" 
                    />
                </div>
            </div>
        </div>
        <!-- Team End -->
    </TemplateOut>
</template>

<script>
import TemplateOut from './templateOut.vue';
import Jumbo from './components/jumbo.vue';
import About from './components/about.vue';
import TeamMember from './components/TeamMember.vue';

export default {
    components: {
        TemplateOut,
        Jumbo,
        About,
        TeamMember
    },
    data() {
        return {
            teamMembers: [
                {
                    id: 1,
                    name: "Full Name 1",
                    designation: "Designation",
                    imgSrc: require("./img/team-1.jpg"),
                    socialLinks: [
                        { url: "https://facebook.com", iconClass: "fab fa-facebook-f" },
                        { url: "https://twitter.com", iconClass: "fab fa-twitter" },
                        { url: "https://instagram.com", iconClass: "fab fa-instagram" }
                    ]
                },
                {
                    id: 2,
                    name: "Full Name 2",
                    designation: "Designation",
                    imgSrc: require("./img/team-2.jpg"),
                    socialLinks: [
                        { url: "https://facebook.com", iconClass: "fab fa-facebook-f" },
                        { url: "https://twitter.com", iconClass: "fab fa-twitter" },
                        { url: "https://instagram.com", iconClass: "fab fa-instagram" }
                    ]
                },
                {
                    id: 3,
                    name: "Full Name 3",
                    designation: "Designation",
                    imgSrc: require("./img/team-3.jpg"),
                    socialLinks: [
                        { url: "https://facebook.com", iconClass: "fab fa-facebook-f" },
                        { url: "https://twitter.com", iconClass: "fab fa-twitter" },
                        { url: "https://instagram.com", iconClass: "fab fa-instagram" }
                    ]
                },
                {
                    id: 4,
                    name: "Full Name 4",
                    designation: "Designation",
                    imgSrc: require("./img/team-4.jpg"),
                    socialLinks: [
                        { url: "https://facebook.com", iconClass: "fab fa-facebook-f" },
                        { url: "https://twitter.com", iconClass: "fab fa-twitter" },
                        { url: "https://instagram.com", iconClass: "fab fa-instagram" }
                    ]
                }
            ]
        }
    }

}
</script>


