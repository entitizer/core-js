'use strict';

const models = require('../lib/models');
const assert = require('assert');

describe('models', function () {
    it('Models should exist', function () {
        assert.ok(models.Model);
        assert.ok(models.Context);
        assert.ok(models.Concept);
    });

    it('Model.toJSON()', function () {
        const context = new models.Context();
        context.lang = 'en';

        const json = context.toJSON();
        const keys = Object.keys(json);

        assert.equal(1, keys.length);
        assert.equal('en', json.lang);
    });

    it('Model.toJSON({})', function () {
        const context = new models.Context({ lang: 'en' });
        assert.equal('en', context.lang);
        context.lang = 'ro';
        assert.equal('ro', context.lang);

        const json = context.toJSON();
        const keys = Object.keys(json);

        assert.equal(1, keys.length);
        assert.equal('ro', json.lang);
    });

    it('Model.toJSON() childs', function () {
        const context = new models.Context({ lang: 'en' });
        const concept = new models.Concept({ value: 'Name', index: 10, context: context });
        assert.equal('en', concept.context.lang);
        assert.equal(10, concept.index);

        const json = concept.toJSON();

        const contextKeys = Object.keys(json.context);

        assert.equal(1, contextKeys.length);
        assert.equal('lang', contextKeys[0]);
        assert.equal('en', json.context.lang);
    });
});
