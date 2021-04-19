function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.querySelector('#feb');
const url = 'data/data.json';
fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(data.feb);
    let feb = data.feb;

    return feb.map(function(feb) {
      let li = createNode('li');
      li.innerHTML = feb.febTitle + " - " + feb.febContent + " /" + feb.febDate;
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  });

const ule = document.querySelector('#jan');
fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(data.jan);
    let jan = data.jan;

    return jan.map(function(jan) {
      let li = createNode('li');
      li.innerHTML = jan.janTitle + " - " + jan.janContent + " /" + jan.janDate;
      append(ule, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  });