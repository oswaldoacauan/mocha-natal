var testando = require('mocha').describe;
var issaq = require('mocha').it;
var assert = require('assert');

var PapaiNoel = require('../papai-noel.js');

testando('Papai Noel 🎅', () => {
  issaq('tenq ser um objeto', () => {
    assert.equal(typeof PapaiNoel, 'object');
  });

  issaq('tenq ter o metodo hoje', () => {
    assert.equal(typeof PapaiNoel.hoje, 'function');
  });

  issaq('tenq ter o metodo eae', () => {
    assert.equal(typeof PapaiNoel.eae, 'function');
  });

  testando('hoje', () => {
    issaq('tenq retornar uma instancia de data', () => {
      assert.equal(PapaiNoel.hoje()instanceof Date, true);
    });
  });

  testando('eae', () => {
    issaq('tenq responder HoHoHo! se for natal', () => {
      PapaiNoel.hoje = () => new Date(2017, 11, 25);

      assert.equal(PapaiNoel.eae(), 'HoHoHo!');
    });

    issaq('tenq responder ZzZzzzZ se não for natal', () => {
      PapaiNoel.hoje = () => new Date(2018, 0, 1);

      assert.equal(PapaiNoel.eae(), 'ZzZzzzZ');
    });
  });
});
