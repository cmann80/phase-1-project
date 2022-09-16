# Phase 1 Project: Name Data Results


## Descripion 
This website will take in names and output a guess about their most likely age, gender and nationality. The data comes from three sources: 

- https://api.agify.io
- https://api.genderize.io
- https://api.nationalize.io

which in turn get their data from international databases of population data.


## Common issues 

(1) There appear to be some errors in the data itself; you may see a nationalities result like:
1. Japan
2. 
3. Italy

(2) There seems to be an issue when running nothing into the input field this is because we dont have a catch statement for no input.
may be around undefined years old!
may have been born in NaN!
may be undefined!
may be from one of the following countries:


## Roadmap

In the future the following improvements could be made:

- Refactoring to remove redundant code, for example having one function that calls the data from all three APIs and converts them into a single name object that all the displays can use.

- Removing text from the text field after the submit button is pushed - cattempted methods caused errors.

- Instead of having two hard-coded forms, have as many forms as necessary created dynamically.

- Graphical representations of data, such as bar and pie graphs


## Acknowledgment:

Dark mode implemented with the help of:
https://www.pullrequest.com/blog/how-to-implement-dark-mode-with-css-js/=======


Country code conversion implemented with the help of:
https://bobbyhadz.com/blog/javascript-get-country-name-from-country-code
