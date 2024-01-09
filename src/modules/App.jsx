import './App.css'

function App() {
  return (
    <>
      <header>
  <h1>hi, i'm clover</h1>
  <h3>i do random things, and sometimes, successfully.</h3>
</header>

<p>check out some of my projects, or see what i've done for <a href="/school">school</a>:</p>

<section className="project-container">
  <a href="https://arcs.is-probably.gay/chat" className="project">
    <article className="project-box">
      <h2 className="project-header">Arcs</h2>
      <p>cool chat app</p>
    </article>
  </a>
  <a href="https://github.com/callmeclover/jskern" className="project">
    <article className="project-box">
      <h2 className="project-header">JsKern</h2>
      <p>terminal in ya browsa</p>
    </article>
  </a>
  <a href="https://github.com/callmeclover/cat" className="project">
    <article className="project-box">
      <h2 className="project-header">cat</h2>
      <p>qsadiojasdnkasdf</p>
    </article>
  </a>
  <a href="https://github.com/callmeclover/bvEdit" className="project">
    <article className="project-box">
      <h2 className="project-header">bvEdit</h2>
      <p>simple file editor that runs from a file</p>
    </article>
  </a>
</section>
    </>
  )
}

function School() {
  return <>
  <header>
      <h1>clover's school projects</h1>
      <h3>edumacetionel</h3>
    </header>

    <p>check out some of my school projects, or go back to the <a href="/">homepage</a>:</p>
    
    <section className="project-container">
      <a href="/school/enlightenment-mini-project" className="proj">
      <article className="project-box">
        <h2 className="project-header">enlightenment-mini-project</h2>
        <span>project on the enlightenment period for 8th grade civics</span>
      </article>
        </a>
      <a href="/school/hydro-power-project" className="proj">
      <article className="project-box">
        <h2 className="project-header">hydro-power-project</h2>
        <span>project on hydro power for 7th grade science</span>
      </article>
        </a>
      <a href="/school/sumer-tb" className="proj">
      <article className="project-box">
        <h2 className="project-header">sumer-tb</h2>
        <span>sumer travel brochure for 7th grade social studies</span>
      </article>
        </a>
      <a href="/school/europe-4-features" className="proj">
      <article className="project-box">
        <h2 className="project-header">europe-4-features</h2>
        <span>project on 4 features in europe for 6th grade social studies</span>
      </article>
        </a>
      <a href="/school/feudal-japan" className="proj">
      <article className="project-box">
        <h2 className="project-header">feudal-japan</h2>
        <span>project on feudalism in japan for 6th grade social studies</span>
      </article>
        </a>
      <a href="/school/nepal" className="proj">
      <article className="project-box">
        <h2 className="project-header">nepal</h2>
        <span>project on nepal for 6th grade social studies</span>
      </article>
        </a>
    </section>
    </>
}

export {App,School}
