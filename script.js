function winner(persons) {
  var hash = sha1(persons.join(''));
  var int = parseInt(hash.substr(-8), 16);
  return int % persons.length;
}

function winners(persons, num) {

  var result = [];
  persons = persons.slice();
  while (persons.length > 0 && result.length < num) {

    var index = winner(persons);
    result.push(persons[index]);
    persons.splice(index, 1);
  }

  return result;
}

function dedup(array) {
  return Array.from(new Set(array));
}

function run() {
  var source = input.value;
  var persons = source.split('\n');

  persons = persons.map(p => p.trim().replace(/\s+/g, ' '));
  persons = persons.filter(p => p);
  persons = dedup(persons);
  persons = persons.sort();

  persons = winners(persons, 3);
  result.innerHTML = ['Winners:',''].concat(persons).join('<br>');

}
