import { Dasgal1Component } from "../cccomponent/Dasgal1Component.jsx";

export default function Home() {
  const students = [
    { name: "Батаа", score: 78 },
    { name: "Сараа", score: 55 },
    { name: "Нараа", score: 92 },
    { name: "Тэмүүлэн", score: 43 },
    { name: "Оюунаа", score: 60 },
  ];
}

return (
    <div>
        <div>nernudd</div>
{students.map((students, index) => (
    return (
<Dasgal1Component key={index} nernuud = {nernuud.name} shalgaltiinhariu = {shalgaltiinhariu.scores}/>
    )
))}
    </div>
);
