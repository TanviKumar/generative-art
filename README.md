# Generative Art for All
Generative Art is a process of algorithmically generating new ideas, forms, shapes colors, or patterns. First, you create rules that provide boundaries for the creation process. Then a computer (or less commonly a human) follows those rules to produce new works.

The ability to create beautiful art pieces with just a few lines of code is a fantastic feat by itself. Generative Art unlocks an entirely new avenue in the traditional art space, where earlier it used to take months or sometimes years to make a single art-piece. But, now, with the advancement of computer architecture, generative artists can make a brilliant art-piece in a concise amount of time with thousands of different unique patterns.
## Setting up the project
<em>Please do this only once before you start contributing to the project</em>
This website is made using **HTML, CSS, React.js and p5.js** technologies.

1. Install Nodejs from [here](https://nodejs.org/en/download/).
2. [Fork](https://help.github.com/articles/fork-a-repo/) the generative-art repository to your Github account. After clone the your repo to your local system.
3. Once your repository is cloned, go to the repository's directory `[your_directory]/generative-art/` and install all the packages and dependencies for the website by typing (if you work on Mac it should be like `Users/[your_user]/[your_directory]/generative-art/`):

    ```
    $ npm install
    ```
4. Check if the packages are correctly installed by typing:
   
   ```
   npm run start
   ```
5. This should open a window in your browser with the site running at http://localhost:3000.
## Before Submitting a PR
<em>Please do this everytime you submit a PR</em>

1. Sync your fork to keep it up-to-date with the upstream repository following the next commands or this [tutorial](https://help.github.com/articles/syncing-a-fork/). First fetch the upstream repo and its commits -commits will be stored on your local fork- and then merge changes from upstream to your local:

    ```
    $ git fetch upstream
    $ git merge upstream/master
    ```
2. Check if your changes are correct and don't break the website render by typing `npm run start`.
3. Commit the files you have changed, type:

    ```
    $ git add -A
    $ git commit -m "add a message to your commit"
    $ git push
    ```
4. Commit to your repository at your github account and create a new PR. Click the *Pull Request* tab on your fork page and then click the green button *New Pull Request*.
5. Before submitting the PR, make sure to run `npm run format` on your project-directory to make the code properly formatted.
## PR Format
*The Pull-Request should contain the following information.*

1. Fix: #issue_number
2. Feature Added/Changed
3. Screenshots of Change
## File Structure
In the repository, there are two main directories which we need to focus:
```
genertative-art/
    src/
    public/
```
* `src/` - All the different components that are present in the website
  * `components/`- The Website is made using React.js Framework and this directory contains all the different React Components
    * `ArtDisplay/` - This repository contains all the different P5.js sketches and the `ArtDisplay` Component which renders all the different sketches. **If you want to add a new art-piece to the project, a sample template is given in this directory for reference**.
    * `Card/` - It contains the `Card` component used to display the information regarding all art-pieces.
    * `Dashboard/` - It contains the `Dashboard` component which renders the homepage with all the different art-pieces.
    * `App.js` - It renders all the different React components of the website.

* `public/` - It contains the `data.json` file which contains the details regarding all the art-pieces. **For adding a new-art piece, the data related to it needs to be added to this file first.** This directory also contains `contributor-data.json` file which contains the information regarding the contributors to the project.
## Generative-Art Code of Conduct
* **Be mindful of your language.** Any of the following behavior is unacceptable: 
  * Offensive comments related to gender identity and expression, sexual orientation, race, ethnicity, language, neuro-type, size, ability, class, religion, culture, subculture, political opinion, age, skill level, occupation, or background
  * Threats of violence
  * Deliberate intimidation
  * Sexually explicit or violent material that is not contextualized and preceded by a considerate warning 
  * Unwelcome sexual attention
  * Stalking or following
  * Or any other kinds of harassment

  Use your best judgement. If it will possibly make others uncomfortable, do not post it.

* **Be respectful.** Disagreement is not an opportunity to attack someone else's thoughts or opinions. Although views may differ, remember to approach every situation with patience and care. 
* **Be considerate.** Think about how your contribution will affect others in the community. 
* **Be open minded.** Embrace new people and new ideas. Our community is continually evolving and we welcome positive change.
### Contributors
1. [Tanvi Kumar](https://github.com/TanviKumar)
2. [Balaji Jayashrri](https://github.com/Jayashrri)
3. [Rishabh Taparia](https://github.com/rt1301)
4. [Purnima Sharma](https://github.com/purnima143)