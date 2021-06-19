<template>
  <div class="header-ribbon stick-header">
    <p class="page-header">Course Library</p>

    <div class="topic-select">
    </div>
    <!-- <input type="text" class="search-box" placeholder="Search..."> -->
  </div>
  <span></span>
  <div class="cards">
      <MinimalFlipCards :cards="cards"/>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import MinimalFlipCards from '@/components/MinimalFlipCards.vue';

export default {
  name: 'Home',
  components: { MinimalFlipCards },

  setup() {
    console.log(navigator.onLine)

    const cards = ref(
        [
          {title: "Java", description: "Quis duis laboris voluptate in incididunt ut ex nulla cupidatat laboris tempor eiusmod qui. Do est labore anim commodo ipsum adipisicing consequat anim ex nulla id. Fugiat qui ipsum duis nisi sunt deserunt qui proident. Officia in magna nisi commodo minim velit exercitation consequat commodo mollit elit id qui deserunt. Consectetur ex minim tempor ut tempor sunt nisi ad deserunt exercitation est.", image: "default_course.png"},
          {title: "Scala", description: "Ut reprehenderit et ullamco ex qui exercitation veniam excepteur proident ea eu et irure. Voluptate ipsum aute laborum tempor sit irure. Pariatur ipsum ut amet enim eu incididunt occaecat adipisicing. Aute pariatur velit culpa excepteur consequat dolor non minim quis eu ex officia.", image: "default_course.png"},
          {title: "Python", description: "Ad labore commodo mollit duis ipsum eiusmod dolor cillum tempor sunt amet dolore esse. Elit labore sunt nostrud duis consectetur. Exercitation aute est non minim enim duis nostrud quis laboris anim incididunt laborum consectetur. Laboris nostrud proident tempor aliqua non. Dolore do sint proident reprehenderit anim nisi aute dolor consectetur esse. Culpa anim Lorem fugiat in eiusmod enim duis culpa laborum. Ipsum in id ut ullamco consectetur.", image: "default_course.png"},
          {title: "Javascript", description: "Adipisicing dolor consectetur excepteur ipsum in magna fugiat elit aliqua exercitation anim. Nostrud elit amet ut duis nulla nulla eu. Pariatur nulla est ut et. Amet duis ipsum ex ad ex duis in aute cupidatat culpa. Dolor elit magna officia ipsum ex exercitation qui. Irure qui ex nulla aliquip pariatur elit laboris.", image: "default_course.png"},
          {title: "Java", description: "Qui quis sunt aliqua et nisi sit aliqua ad labore qui. Ex sunt nulla eu voluptate. Et cupidatat proident reprehenderit occaecat est ullamco velit.", image: "default_course.png"},
          {title: "Scala", description: "Aute aliquip excepteur elit ea commodo et ullamco incididunt exercitation tempor culpa qui. Fugiat labore eiusmod ut est quis labore anim incididunt. Mollit qui veniam id in non ut. Sit ullamco ad ullamco est nulla quis irure veniam enim nisi sunt quis dolor. Nisi fugiat ex excepteur nisi et fugiat duis aute. Ut labore enim occaecat ipsum anim occaecat irure enim minim veniam dolor mollit eu.", image: "default_course.png"},
          {title: "Python", description: "Culpa do ullamco consequat dolor anim laboris exercitation mollit consequat Lorem nostrud est eu in. Consequat est ea mollit labore et quis cupidatat officia excepteur minim esse ut et in. Nulla proident qui nisi dolor Lorem pariatur veniam aute incididunt. Occaecat ex exercitation nisi excepteur occaecat velit ullamco excepteur cupidatat incididunt laborum. Excepteur ea laborum ex eiusmod laboris sit consectetur non excepteur consectetur. Deserunt consequat pariatur et cillum eu esse amet tempor dolor.", image: "default_course.png"},
          {title: "Javascript", description: "Ad deserunt labore amet ut mollit duis et ipsum culpa dolor voluptate do. Ullamco velit est nisi exercitation. Ad velit nisi anim et cupidatat est ex esse ad.", image: "default_course.png"},
          {title: "Java", description: "Minim aliqua qui eiusmod aute qui non. Veniam aliqua sunt laborum cillum nisi esse minim nostrud non esse. Commodo duis tempor sunt qui fugiat proident duis elit occaecat excepteur non consequat non enim. Ea eu ipsum culpa quis excepteur incididunt. Ut nulla esse amet ullamco eu. Minim ullamco voluptate ea ut labore labore irure quis non non. Consectetur do nostrud nostrud culpa nisi magna cupidatat Lorem irure.", image: "default_course.png"},
          {title: "Scala", description: "Nisi laboris culpa ut voluptate occaecat cupidatat ullamco est aliqua consequat. Veniam nostrud ullamco mollit nulla reprehenderit eiusmod deserunt occaecat aliquip laboris eiusmod officia officia. Nisi incididunt exercitation labore labore. Eu consectetur occaecat id magna aliqua consequat do amet eiusmod sint.", image: "default_course.png"},
          {title: "Python", description: "Incididunt cillum ullamco anim esse pariatur veniam ea. Ullamco qui ullamco non aute quis. Do dolor ullamco enim culpa adipisicing aliqua consectetur labore adipisicing. Dolore consectetur non Lorem occaecat. Dolore Lorem aliquip proident Lorem mollit. Qui sint est laborum sunt id culpa laboris occaecat dolor nulla eu esse enim consectetur.", image: "default_course.png"},
          {title: "Javascript", description: "Culpa proident exercitation deserunt nostrud eu reprehenderit quis quis sint consequat eu. Reprehenderit consectetur do ut magna eiusmod. Officia duis commodo pariatur aliqua dolore pariatur amet excepteur sint. Nisi sint id do culpa. Adipisicing ut elit Lorem minim aute. Pariatur aliquip duis aute duis ipsum veniam amet. Consequat culpa nisi ullamco Lorem.", image: "default_course.png"},
          {title: "Java", description: "Duis aliquip magna qui esse consectetur cupidatat. Lorem culpa mollit ullamco aute qui in ad. Eiusmod qui elit mollit ex. Lorem Lorem voluptate cillum incididunt culpa consectetur.", image: "default_course.png"},
          {title: "Scala", description: "Cupidatat sint et veniam deserunt aliquip adipisicing est aute. Officia ea ex amet eu id magna et. Mollit elit nisi amet proident minim laboris laboris do velit veniam irure ad. Ad do commodo est amet. Nostrud aliqua est dolor eu qui commodo do reprehenderit qui nisi veniam mollit sunt voluptate. Minim elit elit est reprehenderit.", image: "default_course.png"},
          {title: "Python", description: "Ex labore aute nisi officia duis dolor nostrud fugiat occaecat irure ea enim. Dolor commodo veniam et sunt ad consequat cillum. Adipisicing sit et nulla culpa ad incididunt consequat non esse aute. Ex qui aliquip in enim veniam pariatur sunt Lorem ipsum consequat minim. Fugiat quis non enim magna ullamco eu eiusmod aliqua est eu.", image: "default_course.png"},
          {title: "Javascript", description: "Enim est nostrud sit et qui eiusmod magna anim anim quis esse. Elit aliqua do eiusmod mollit fugiat Lorem consectetur Lorem. Adipisicing velit ad dolore duis deserunt amet sint.", image: "default_course.png"}
        ]
      )

      const topics = ref(
        [
          {id: 1, name: "Java"},
          {id: 1, name: "Javascript"},
          {id: 1, name: "Python"},
          {id: 1, name: "Scala"}
        ]
      )

    return { cards, topics }
  }
}
</script>

<style scoped>
.topic-select {
  padding-top: 5px;
  font-size: 1.2em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.topic-filter {
  border-radius: 20px;
  width: 40%;
  border: chartreuse;
  font-size: 1em;
  text-align: center;
  padding: 5px;
}

.dropdown {
  font-size: 1.2em;
  text-align: center;
  width: 500px;
}

.cards {
  padding-top: 120px;
  padding-bottom: 120px;
}

.search-box {
  margin-left: 100px;
}
</style>