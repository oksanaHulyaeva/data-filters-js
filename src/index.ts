import { isValidLength, isValidSubstring } from './utils/utils';

class App {
  isCaseSensitive: boolean;

  isLoading: boolean;

  url: string;

  output: string;

  constructor(isCaseSensitive: boolean) {
    this.isCaseSensitive = isCaseSensitive;
    this.isLoading = false;
    this.url = 'http://www.mrsoft.by/data.json';
    this.output = 'Output...';
  }

  createStaticApp() {
    const app = document.createElement('div');
    app.classList.add('app');

    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    header.classList.add('header');
    h1.classList.add('title');
    h1.innerText = 'Data Filter';

    const form = document.createElement('form');
    form.classList.add('form');

    const input = document.createElement('input');
    input.classList.add('input');
    input.type = 'text';
    input.autofocus = true;
    input.placeholder = 'Enter text or length';

    const checkboxContainer = document.createElement('div');
    checkboxContainer.classList.add('checkbox-container');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.id = 'checkbox';
    checkbox.checked = this.isCaseSensitive;

    const label = document.createElement('label');
    label.classList.add('label');
    label.htmlFor = 'checkbox';
    label.innerText = 'Case sensitive';

    const buttonContainer = document.createElement('div');
    const lengthFilter = document.createElement('button');
    const substrFilter = document.createElement('button');
    buttonContainer.classList.add('button-container');
    lengthFilter.type = 'submit';
    substrFilter.type = 'submit';
    lengthFilter.classList.add('length-filter');
    substrFilter.classList.add('substr-filter');
    lengthFilter.innerText = 'Filter by length';
    substrFilter.innerText = 'Filter by string';

    const output = document.createElement('div');
    output.classList.add('output');
    output.innerText = this.output;

    checkboxContainer.append(checkbox, label);
    buttonContainer.append(lengthFilter, substrFilter);
    form.append(input, checkboxContainer, buttonContainer, output);
    header.append(h1);
    app.append(header, form);
    document.body.append(app);
  }

  async getData() {
    try {
      const response = await fetch(this.url, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      // const data = await response.json();
      console.log(response);
      // console.log(data);
    } catch (err) {
      console.log('err');
      console.log(err);
    }
  }

  init() {
    this.createStaticApp();
    this.getData();
  }
}

const app = new App(false);
app.init();
