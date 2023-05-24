<script>
  import { onMount } from "svelte";
  import { menus } from "./menusVideos.js";
  let url = "https://picsum.photos/v2/list?page=2&limit=200";
  /**
   * @type {any[]}
   */
  let posts = [];
  onMount(async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    posts = data
    /* .filter((/** @type {{ id: number; }} *//* it) => it.id < 121); */
    console.log(posts);
  });

  const menuSelect = menus.filter((men) => men.menu === "Famille");
  if (menuSelect[0].src.slice(0, 4) !== "/src") {
    menuSelect.map((men) => (men.src = "/src/lib/box_img" + men.src));
  }

 
  
  const handleClick_1 = () => (window.location.href = "/about");
  const handleClick_2 = () => (window.location.href = "/sverdle");
  
</script>

<svelte:head>
  <title>test</title>
  <meta name="description" content="About this app" />
</svelte:head>
<h1>Mes tests</h1>

<div class="envIcon">
  {#each menuSelect as men}
    <button class="bloc_img" on:click={handleClick_2}>
      <img class="blogs" loading="lazy" src={men.src} alt={men.detail} />

      <span class="ti_blog" data-select={men.clas}>{men.detail} </span>

      <ul class="vid_list texte">
        <p class="groupe">{men.groupe}</p>
      </ul>
    </button>
  {/each}
</div>
<div class="envIcon">
  {#each posts as post}
    <div class="bloc_img" on:keydown on:click={handleClick_1}>
      <img
        class="img blogs"
        loading="lazy"
        src={post.download_url}
        data-id={post.id}
        alt={post.author}
      />
    </div>
  {/each}
</div>

<style>
  .envIcon {
    display: grid;
    gap: 0.2rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    background-color: rgba(250, 237, 221, 0.3);
    overflow: scroll;
  }
  .img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
  .bloc_img {
    display: grid;
    padding: 0.2rem;
    text-decoration: none;
    aspect-ratio: 1/1;
    font-size: var(--fs-tiBlog);
    text-shadow: 1px 1px 2px black;
    color: gold;
    border: none;
    background: transparent;
    object-fit: cover;
  }

  .texte,
  .blogs,
  .ti_blog,
  .vid_list {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  .blogs {
    width: 100%;
    border-radius: 10%;
    aspect-ratio: 1 / 1;
  }
  .ti_blog {
    padding-top: 1rem;
    text-align: center;
  }
  .texte {
    border-radius: 10%;
    padding: 5px;
    opacity: 0;
    align-self: end;
  }
  .groupe {
    text-align: center;
  }

  .bloc_img:hover .blogs {
    box-shadow: 5px 5px 5px grey;
  }
  .bloc_img:hover .ti_blog {
    font-size: calc(var(--fs-tiBlog) * 1.5);
    cursor: pointer;
    z-index: 2;
  }
  .bloc_img:hover .texte {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    background-color: hsl(50, 0%, 50%, 0.3);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
</style>
