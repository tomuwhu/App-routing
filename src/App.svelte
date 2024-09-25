<script>
  // @ts-ignore
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  export let url = "App-routing";
</script>

<Router {url}>
  <nav>
    <Link to="{url}/">Home</Link>
    <Link to="{url}/about">About</Link>
  </nav>
  <main>
    <Route path="{url}/about" component={About} />
    <Route path="{url}/" component={Home} />
  </main>
</Router>

<style>
</style>
