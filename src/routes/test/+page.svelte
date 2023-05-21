<script>
  import { menus } from "./menusVideos.js";

  console.log(menus);
  const menuSelect = menus.filter((men) => men.menu === "Famille");
  if (menuSelect[0].src.slice(0, 4) !== "/src") {
    menuSelect.map((men) => (men.src = "/src/lib/box_img" + men.src));
  }

  function handleClick() {
    window.location.href = "/";
  }
</script>

<svelte:head>
  <title>test</title>
  <meta name="description" content="About this app" />
</svelte:head>
<h1>Mes tests</h1>
<div class="envIcon">
  {#each menuSelect as men}
    <button class="bloc_img" on:click={handleClick}>
      <img
        class={"blogs " + men.clas.slice(1, 4)}
        loading="lazy"
        src={men.src}
        alt={men.menu}
      />

      <span class="ti_blog" data-select={men.clas}>{men.detail} </span>

      <ul class="vid_list texte">
        <p class="groupe">{men.groupe}</p>
      </ul>
    </button>
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
  .bloc_img:hover .blogs.vid {
    box-shadow: 5px 5px 5px hsl(240, 100%, 70%);
  }
  .bloc_img:hover .blogs.dia {
    box-shadow: 5px 5px 5px hsl(0, 100%, 70%);
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
