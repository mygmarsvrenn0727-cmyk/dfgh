import { JComponent } from "./cccomponent/JComponent.jsx";

export default function Home() {
  const foods = [
    { name: "Бууз", price: 1200 },
    { name: "Хуушуур", price: 1500 },
    { name: "Цуйван", price: 8000 },
    { name: "Боодог", price: 25000 },
  ];

  return (
    <div>
      <div>hoolnuud</div>
      <JComponent hoolner={foods[0].name} hoolniiune={foods[0].price} />
    </div>
  );
}
