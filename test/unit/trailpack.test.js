import path from 'path'
import os from 'os'
import assert from 'yeoman-assert'
import test from 'yeoman-test'

describe('trails:trailpack', () => {
  describe('Should properly install trailpack and his archetype', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/trailpack'))
        .withArguments(['trailpack-hapi'])
        .withOptions({
          'skip-update': true,
          'skip-install': false
        })
        .on('end', done)
    })

    it('Should properly create trailpack files', () => {
      assert.file([
        'api/controllers/DefaultController.js',
        'api/controllers/ViewController.js',
        'api/controllers/index.js'
      ])
    })
  })
})
