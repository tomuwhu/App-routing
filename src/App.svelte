<script>
  // @ts-ignore
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  export let url = ""
</script>

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
    <main>
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </main>
</Router>

<style>

</style>
