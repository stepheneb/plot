
Playing with Simon Willison’s:
[download-esm: a tool for downloading ECMAScript modules](https://simonwillison.net/2023/May/2/download-esm/)
as a way to avoid complex JavaScript build systems for a simple project.

FYI, Simon [warns](https://github.com/simonw/download-esm#warning)
> This is alpha software. It works for downloading Observable Plot, but
> has not been tested against many other packages yet. Your help is welcome
> in [testing this further](https://github.com/simonw/download-esm/issues/2)!"

On my mac using Python 3 installed with brew, install `download-esm` with `pip3`.

```
pip3 install download-esm
```

Create a project directory named `plot` and download an ECMAScript module
from the npm package [@observablehq/plot](https://www.npmjs.com/package/@observablehq/plot)
and all 40 of it's dependencies into `./plot/modules` rewriting the import and
export statements as relative paths.
```
download-esm @observablehq/plot plot/modules
```

Move to the root directory and create `index.html` referencing the
ECMAScript module `./modules/observablehq-plot-0-6-6.js` which
now correctly references the other 40 dependencies.
```
cd plot

echo '<div id="myplot"></div>
<div>
This project: <a href="https://github.com/stepheneb/plot">stepheneb/plot</a>,
uses: <a href="https://github.com/simonw/download-esm">simonw/download-esm</a>
</div>
<script type="module">
import * as Plot from "./modules/observablehq-plot-0-6-6.js";
const plot = Plot.rectY(
    {length: 10000}, Plot.binX({y: "count"}, {x: Math.random})
).plot();
const div = document.querySelector("#myplot");
div.append(plot);
</script>' > index.html
```

Start a local server and open: http://localhost:8000/
```
python3 -m http.server
```

Write this readme and make this experiment a git repo.
```
git init .
git add .
git commit -m "playing with Simon Willison’s download-esm tool"
```

Use the [gh](https://cli.github.com/manual/gh) cli tool to create a new repo
on github.

```
gh repo create --source . --public
✓ Created repository stepheneb/plot on GitHub
✓ Added remote https://github.com/stepheneb/plot.git
```

I prefer using ssh endpoints interacting with github. There doesn't appear to
be a way to specify this using the `gh` cli.

```
git remote -v
origin	https://github.com/stepheneb/plot.git (fetch)
origin	https://github.com/stepheneb/plot.git (push)

git remote set-url origin git@github.com:stepheneb/plot.git

git remote -v
origin	git@github.com:stepheneb/plot.git (fetch)
origin	git@github.com:stepheneb/plot.git (push)
```

Push the local work.
```
git push --set-upstream origin main
```

Open the repo in a browser, goto **Settings:Pages**, and enable deployment from `main`.
Add https://stepheneb.github.io/plot/ to the repo's **About**.

I'd also like to be able do these steps from the terminal using `gh`.

Now sharable: https://stepheneb.github.io/plot/

Note: I amended the first commit multiple times after editing this readme ...

```
git add readme.md
git commit --amend --no-edit
git push -f
```
