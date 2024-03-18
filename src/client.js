import * as contentful from 'contentful'

// Fix the env issues, its not taking up the env from the .env.development
//export const client = contentful.createClient({
//    space: process.env.REACT_APP_SPACE_ID,
//    accessToken: process.env.REACT_APP_ACCESS_TOKEN
//})

export const client = contentful.createClient({
    space: 'sipmtt1ybpaz',
    accessToken: '9Ji1RxV6EzcDgM3HpV63Z-LTlRdfH_pxh7CwrMaRYUg'
})