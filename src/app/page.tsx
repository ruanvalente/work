import { Condition } from "../presentation/ui/condition";
import { For } from "../presentation/ui/for";

export default function Home() {
  const data = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 35 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'David', age: 31 },
  ];

  return (
    <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Lista de Usuários</h1>
    <For each={data} render={(item, index) => (
      <div key={item.id} className="bg-gray-100 p-2 mb-2 rounded flex justify-between items-center">
        <>
          <span className="font-semibold">{index + 1}.</span>
          {item.name} ({item.age} anos)
        </>
        <Condition when={item.age >= 30}>
          <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">30+</span>
        </Condition>
        <Condition when={item.age < 30}>
          <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">30-</span>
        </Condition>
      </div>
    )} />
  </div>
  );
}
