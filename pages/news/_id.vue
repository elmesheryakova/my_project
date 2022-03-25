<template>
  <div class="news-only">
    <div class="container">
      <h1 class="pages__title">Заголовок новости</h1>
      <div class="news-only__item">
        <div class="news-only__item-img">
          <img :src="require(`@/assets/img/news1.jpg`)" alt="img" />
        </div>
        <div class="news-only__item-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam
          blanditiis adipisci. Tempore dicta provident inventore nulla doloribus
          vel quibusdam numquam alias repellat quaerat rerum repellendus
          suscipit provident earum, rem, voluptatum esse nemo nam quis a, neque
          exercitationem. Provident obcaecati repudiandae quam magnam maiores
          eos, tempore vel commodi dolores? Repudiandae aperiam enim, minus,
          facere, dicta ipsum unde temporibus natus asperiores assumenda earum
          vitae officiis veritatis accusantium tempora totam optio quisquam
          expedita hic consequuntur recusandae. Suscipit dicta adipisci,
          obcaecati, ratione totam ullam doloribus voluptatibus accusantium
          nesciunt sit odio vitae nisi. Aliquid illum esse iusto tempore
          reiciendis, consequatur labore, unde repellendus quaerat
          exercitationem soluta voluptates iste ab voluptate! Provident
          deleniti, doloribus aliquid culpa dolore facilis optio veniam deserunt
          obcaecati accusamus, repudiandae odit quos exercitationem nesciunt
          voluptate error suscipit officia! Quasi suscipit reprehenderit,
          debitis assumenda laborum molestiae sequi unde totam amet natus
          corporis nam, consequuntur fuga vero ratione. Debitis saepe commodi,
          corrupti ipsam pariatur accusamus, cum laboriosam quia nostrum ea quis
          consequatur libero, in qui soluta quasi amet quisquam quibusdam
          veniam. Totam a alias neque earum rerum iusto ad temporibus distinctio
          numquam eligendi, blanditiis, doloremque debitis corporis dolore iure
          nihil error dolores consectetur voluptatibus ipsum unde soluta
          eveniet. Illo, voluptate quia? At reiciendis debitis sapiente dicta
          quod odio aspernatur assumenda culpa, unde ducimus, voluptas odit quo
          accusantium vero aliquam veniam quos perspiciatis nemo omnis, beatae
          nesciunt itaque. Doloribus iusto nostrum tempora ratione dolor
          quibusdam hic debitis sequi iure, voluptatibus nulla vero at
          exercitationem totam, in enim eum. Sequi, velit recusandae asperiores
          blanditiis fugit iste maxime iure harum quos possimus aliquid. Optio
          recusandae sed error blanditiis quia ad minima cupiditate eos magni
          eligendi omnis, dolorum reprehenderit dolore animi nisi officiis,
          tempore modi vero quaerat odio esse fugiat quis, ullam sint. Delectus
          eos ab, fugiat voluptatibus quasi quos alias placeat aperiam nam
          doloribus quaerat commodi necessitatibus quam quisquam autem ipsam
          libero, deserunt, voluptate porro. Cum magni voluptas et minima
          laudantium officiis labore consectetur doloremque enim odit, explicabo
          molestiae quia architecto, debitis deleniti perferendis, mollitia odio
          cupiditate est consequatur in voluptatum! Impedit dignissimos
          voluptatum dolor qui aliquid hic, dicta error autem, facilis veniam ad
          saepe deleniti tenetur quam? Recusandae asperiores iste perferendis
          sequi voluptate! Eum impedit voluptas commodi quaerat sequi laudantium
          error reprehenderit doloribus aspernatur? Molestias in consequatur
          suscipit eligendi. Facilis animi eius, magnam laboriosam cum
          perspiciatis deleniti libero placeat quo mollitia ex provident quod
          quaerat, beatae nemo distinctio explicabo numquam. Ipsam autem
          tempora, voluptatem numquam hic at perferendis odio itaque consequatur
          aliquid placeat, pariatur fuga, quisquam non ex minus architecto totam
          eaque est quaerat sequi quasi recusandae voluptates harum? Explicabo
          repellendus ipsa eum cupiditate recusandae ipsam in sed soluta
          molestias sit dolore, a animi, placeat molestiae nihil! Nobis sed
          cumque, explicabo officia reprehenderit magni esse quidem aperiam
          facere in adipisci repudiandae ab illum quibusdam a quam atque ea.
          Voluptas porro nesciunt quibusdam impedit! Voluptatum impedit
          perferendis minus sed, aut ipsa cum reiciendis quibusdam accusantium
          omnis voluptas beatae aliquam, sequi error pariatur soluta, quam enim!
          Necessitatibus ea eaque quos labore, quia ad tempore ut iusto facere,
          vero fugit illo quidem recusandae fuga! Hic culpa eveniet amet nam
          error iure iusto dignissimos facere. Et asperiores laborum dolores
          necessitatibus unde amet rerum magni non quia. Velit perferendis
          soluta eius ad cumque voluptatem corporis rerum, eum provident ratione
          quidem neque consequuntur nulla maxime dicta repellendus, voluptate
          illo, consequatur possimus cum debitis placeat hic. Veniam cupiditate
          amet iste velit, soluta atque enim ratione eius. Tempore, doloribus
          eius! Nostrum, accusantium debitis quo, in recusandae deleniti animi
          suscipit adipisci earum aspernatur at? Labore veniam, accusantium
          saepe laborum alias ullam nulla atque. Saepe doloremque quis nam odio
          architecto quia quo dolor veritatis! Nobis ipsa harum cumque
          dignissimos, dolorum culpa aliquid, laborum sit expedita, mollitia
          quas laudantium. Quae, labore nisi nesciunt sapiente facere veritatis
          provident doloremque reiciendis iusto?
        </div>
        <p class="news-only__item-date">19.02.2022</p>
      </div>
    </div>
    <Subscribtion />
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.news-only {
  &__item {
    margin-bottom: 50px;
    background-color: #f4f6f6;
    &-img {
      width: 100%;
      height: 360px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-text {
      columns: 2 auto;
      padding: 60px 80px 40px;
      gap: 100px;
    }
    &-date {
      text-align: right;
      padding: 0 80px 20px;
    }
    @media (max-width: 991px) {
      &-text {
        padding: 40px;
        gap: 60px;
      }
    }
    @media (max-width: 800px) {
      &-text {
        padding: 30px;
        gap: 30px;
      }
    }
    @media (max-width: 700px) {
      margin-right: -20px;
      margin-left: -20px;
      width: 110%;
      &-text {
        columns: 1;
        padding-right: 50px;
      }
    }
    @media (max-width: 450px) {
      &-text {
        padding-right: 30px;
        padding-left: 20px;
      }
    }
    @media (max-width: 370px) {
      &-text {
        padding-right: 15px;
      }
    }
  }
}
</style>
