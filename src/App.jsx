import { Post } from './Post';
import { Header } from './components/Header';
import Sidebar from './components/Sidebar';
import './styles/styles.css';

function App() {
  return (
    <div>
      <Header />
      <div className='max-w-[70rem] my-8 mx-auto py-0 px-4 grid grid-cols-2 gap-8 items-start'>
        <Sidebar />
        <main className='flex-1'>
          <Post
            author='Weslley Oliveira'
            content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum animi incidunt, quis a reprehenderit, eaque odit, necessitatibus aliquid ipsum beatae laborum tempore voluptatum fugiat praesentium quasi placeat delectus asperiores laboriosam.'
          />
        </main>
      </div>

    </div>
  )
}

export default App
