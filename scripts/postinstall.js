// @ts-check
const fs = require('fs')
const path = require('path')

const main = async () => {
  if( fs.existsSync('sonata-api.d.ts') ) {
    await fs.promises.rename(
      'sonata-api.d.ts',
      path.join('api', 'sonata-api.d.ts'),
    )
  }

  if( fs.existsSync('waltz-ui.d.ts') ) {
    await fs.promises.rename(
      'waltz-ui.d.ts',
      path.join('web', 'waltz-ui.d.ts'),
    )
  }
}

main()

