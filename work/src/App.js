import "./App.css";
import Button from "./components/Button";
import "./tailwind.css";
import Tab from "./components/Tab";

function App() {
  return (
    <div className="App">
     <div style={{padding:50}}>
     <Tab activeTab={1}>
      <Tab.Panel title="Profil">1.Panel</Tab.Panel>
      <Tab.Panel title="Hakkında">2.Panel</Tab.Panel>
      <Tab.Panel title="Ayarlar">3.Panel</Tab.Panel>
     </Tab>
     </div>
      
      
      <Button text="Button örneği" />
      <Button text="Button örneği" variant="success" />
      <Button text="Button örneği" variant="danger" />
      <Button text="Button örneği" variant="warning" />
    </div>
  );
}

export default App;
