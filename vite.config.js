import { defineConfig, } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
// https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
export default defineConfig(({mode})=>{
  const server = {
    port:8080,
    open:true,
    proxy:{}
  }
  return {
    base:'/',
    plugins:[vue()],
    resolve:{
      alias:{
        '@':resolve(__dirname,'src')
      }
    },
    server
  }
})