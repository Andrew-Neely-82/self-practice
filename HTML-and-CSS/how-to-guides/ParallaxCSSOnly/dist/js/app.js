(() => {
  const html = {
    head: `  
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./dist/css/style.css" />
  <title>Parallax - CSS Only</title>`,
    body: `
      <div class="wrapper">
        <header>
          <img class="background" src="./img/ROCKY-MOUNTAINS.webp" alt="ROCKY-MOUNTAINS" />
          <img class="foreground" src="./img/forest-tree-line-transparent-background-vector-removebg-preview.png" alt="" />
          <h1 class="title">Welcome</h1>
        </header>
        <div class="main-body">
          <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, praesentium id tempore, excepturi odio, rem voluptatum ut quod tempora reiciendis natus perspiciatis dolorum maiores veritatis officiis sequi alias labore facere inventore quaerat doloremque quisquam cupiditate qui. Eligendi, blanditiis minima? Autem aut earum hic, voluptates amet nihil? Expedita tenetur nisi quam asperiores corrupti voluptate ab veniam voluptas amet mollitia exercitationem recusandae quo dolorem maiores, atque totam officia quod dolore reprehenderit fuga ipsum. Blanditiis, consectetur quod! Voluptatibus ipsa, suscipit deserunt expedita commodi ut iusto! Totam, tempore distinctio vel officia repellendus aliquam cum non at quibusdam reiciendis porro culpa ipsa. Quis tempore magnam facilis corrupti reprehenderit! Officiis eveniet, maxime debitis aut tempora similique asperiores voluptates ad vel, hic id non quibusdam laboriosam unde! Pariatur consequuntur nesciunt vel? Dolor in aut, similique consequatur nostrum repellat assumenda tenetur sint, corrupti magni facilis ipsam, harum et. Quos, minus explicabo eos eius nisi obcaecati perspiciatis omnis esse earum vero nobis rem mollitia architecto fugiat accusamus nemo quaerat suscipit corrupti quidem consequatur adipisci nam a laudantium? Consectetur voluptates vel ratione necessitatibus id. Voluptatem fuga placeat nisi impedit sed quasi dolores, saepe autem sint, aliquid dolore omnis adipisci ea illum quod repellat ducimus distinctio commodi unde harum explicabo? Eveniet, alias explicabo pariatur sapiente vel praesentium dolorem corporis odit! Deleniti, veniam optio iste iusto aperiam consequatur amet. Sunt ad maiores, ab reprehenderit quibusdam molestias placeat ducimus, quidem illum quam quis provident voluptates nisi ipsam ullam accusantium quos. Voluptas pariatur necessitatibus eos laboriosam consequuntur natus cumque neque iure. Officia, eaque neque tempora assumenda at adipisci sed voluptas accusamus suscipit placeat itaque soluta eveniet labore deleniti ad. Doloribus animi eius, dolore eaque fugiat quas ad voluptas provident obcaecati optio nam esse eligendi! Animi eveniet asperiores, at temporibus soluta in vitae impedit culpa itaque, sed id ab ratione eligendi, saepe veritatis unde error corporis. Possimus aperiam, fuga voluptate rem, nobis vitae modi officia adipisci sed dolorum illum quidem hic laboriosam, dolorem a asperiores atque dignissimos at nesciunt neque fugit esse exercitationem quas. Autem mollitia praesentium commodi atque sequi officia corrupti repellat, odio voluptates laudantium distinctio earum nobis nihil, alias veritatis eaque molestias saepe doloribus quod quam! Dolor quia aliquam, architecto porro asperiores cupiditate magni repellendus nostrum voluptatibus nihil? Ab qui delectus culpa atque quidem minima eum eveniet eius a, ut iure, officiis nemo ratione voluptates ipsam. Ab repellendus, quam non nulla suscipit aliquam nemo distinctio. Incidunt corrupti ullam deleniti, nam possimus veniam? Voluptas, fuga voluptatibus ipsa harum ex repellat ratione ab at, earum in asperiores quae debitis ea beatae quisquam provident obcaecati maxime. Autem consequatur, est corporis id quod voluptatibus ea dolore reiciendis non temporibus perspiciatis, pariatur totam nostrum sit nobis deserunt! Doloribus soluta consequuntur et aut iste modi laboriosam ut facere provident nobis, tempora aliquid minus blanditiis, harum quae itaque ducimus quia fuga dolor distinctio quibusdam repellendus nemo! Fuga velit at id, earum rerum vel vitae cumque dolores eos repudiandae eveniet, optio eaque incidunt. Maxime neque hic quod illo placeat voluptas temporibus dolorum aut vero. Animi assumenda, sed adipisci nulla necessitatibus totam!</p>
        </div>
      </div>`,
  };

  $(document).ready(() => {
    $("head").html(html.head);
    $("body").html(html.body);
  });

  console.log("placed html content in js to avoid html taking up html code on github");
  console.log("");
  console.log("sorry if this makes it harder to read the code for you if youre trying to learn from it");
})();
