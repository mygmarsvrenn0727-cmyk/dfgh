"use client";

import { useState } from "react";

const INITIAL_STUDENTS = [
  { id: 1, name: "Болд" },
  { id: 2, name: "Сараа" },
  { id: 3, name: "Тэмүүлэн" },
  { id: 4, name: "Ануужин" },
  { id: 5, name: "Батбаяр" },
  { id: 6, name: "Оюунаа" },
  { id: 7, name: "Ганзориг" },
  { id: 8, name: "Мэндбаяр" },
];

const Page = () => {
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [team, setTeam] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToTeam = (student) => {
    if (!team.some((item) => item.id === student.id)) {
      setTeam([...team, student]);
    }
  };

  const removeFromTeam = (studentId) => {
    setTeam(team.filter((item) => item.id !== studentId));
  };

  const clearTeam = () => {
    setTeam([]);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>Сурагчид</div>

      <input
        type="text"
        placeholder="Нэрээр хайх"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div>
        {filteredStudents.map((student) => {
          const isInTeam = team.some((item) => item.id === student.id);
          if (isInTeam) return null;

          return (
            <div key={student.id}>
              <span>{student.name}</span>
              <button onClick={() => addToTeam(student)}>Багт нэмэх</button>
            </div>
          );
        })}
      </div>

      <div>Баг ({team.length})</div>
      <div>
        {team.map((student) => (
          <div key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => removeFromTeam(student.id)}>Хасах</button>
          </div>
        ))}
      </div>

      {team.length > 0 && <button onClick={clearTeam}>Баг тараах</button>}
    </div>
  );
};

export default Page;
