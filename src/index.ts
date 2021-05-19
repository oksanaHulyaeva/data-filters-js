import {
  isValidLength,
  isValidSubstring,
  filterByLength,
  filterBySubstr,
} from './utils/utils';

class App {
  isCaseSensitive: boolean;

  url: string;

  output: string;

  data: string[];

  constructor() {
    this.isCaseSensitive = false;
    this.url = 'http://www.mrsoft.by/data.json';
    this.output = 'Output...';
    this.data = [
      'affenpinscher',
      'whippet',
      'african',
      'irish wolfhound',
      'pembroke',
      'airedale',
      'NEWFOUNDLAND',
      'OTTERHOUND',
      'PAPILLON',
      'PEKINESE',
      'SWISS MOUNTAIN',
      'weimaraner',
    ];
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

    this.checkboxHandler(checkbox);
    this.lengthFilterBtnHandler(lengthFilter);
    this.substrFilterBtnHandler(substrFilter);
  }

  updateIsCaseSensitive(elem:HTMLInputElement) {
    if (elem.checked) this.isCaseSensitive = true;
    else this.isCaseSensitive = false;
  }

  updateOutputField() {
    const output = document.querySelector('.output');
    if (output) output.innerHTML = this.output;
  }

  checkboxHandler(elem: HTMLInputElement) {
    elem.addEventListener('change', () => this.updateIsCaseSensitive(elem));
  }

  lengthFilterBtnHandler(elem: HTMLButtonElement) {
    elem.addEventListener('click', (event:MouseEvent) => {
      event.preventDefault();
      const target = event.target as Element;
      if (!target.classList.contains('length-filter')) return;

      const { value } = <HTMLInputElement>document.querySelector('.input');
      if (isValidLength(+value)) {
        const result = filterByLength(this.data, +value);
        this.output = result.length < 1 ? 'No result' : result;
        this.updateOutputField();
      } else {
        this.output = 'Wrong input! Change and try again!';
        this.updateOutputField();
      }
    });
  }

  substrFilterBtnHandler(elem: HTMLButtonElement) {
    elem.addEventListener('click', (event:MouseEvent) => {
      event.preventDefault();
      const target = event.target as Element;
      if (!target.classList.contains('substr-filter')) return;

      const { value } = <HTMLInputElement>document.querySelector('.input');
      if (isValidSubstring(value)) {
        const result = filterBySubstr(this.data, value, this.isCaseSensitive);
        this.output = result.length < 1 ? 'No result' : result;
        this.updateOutputField();
      } else {
        this.output = 'Wrong input! Change and try again!';
        this.updateOutputField();
      }
    });
  }

  init() {
    this.createStaticApp();
  }
}

const app = new App();
app.init();
