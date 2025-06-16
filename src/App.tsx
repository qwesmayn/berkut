import { Routes, Route } from 'react-router-dom';
import { Favorites } from '@pages/Favorites/Favorites';
import { HomePage } from '@pages/HomePage/HomePage';
import { Header } from '@widgets/Header';
import { QueryClientProvider } from '@app/providers/QueryClientProvider';
import { ImageInfo } from '@pages/ImageInfo/ImageInfo';
import { FocusUp } from '@shared/ui/focusUp';

function App() {
  return (
    <QueryClientProvider  >
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/image/:id" element={<ImageInfo />} />
        </Routes>
        <FocusUp />
    </QueryClientProvider> 
  );
}

export default App;
