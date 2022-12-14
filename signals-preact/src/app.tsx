import { useSignal, useComputed, useSignalEffect } from '@preact/signals'
import preactLogo from './assets/preact.svg'
import './app.css'

export function App() {
  const count = useSignal(0)
  const double = useComputed(() => count.value * 2)
  useSignalEffect(() => console.log(count.value))
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => count.value++ }>
          count is {count} and double is {double}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
