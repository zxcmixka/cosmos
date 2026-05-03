import React, { useState, useRef } from 'react';
import { Stage, Layer, Rect, Circle, Text, Group } from 'react-konva';
import { Square, Pipette, Sofa } from 'lucide-react';

// Типы для наших объектов на холсте
interface CanvasObject {
  id: string;
  type: 'room' | 'wall' | 'furniture';
  x: number;
  y: number;
}

export const Main = () => {
  const [objects, setObjects] = useState<CanvasObject[]>([]);
  const stageRef = useRef<any>(null);

  // Обработка начала перетаскивания из боковой панели
  const handleDragStart = (e: React.DragEvent, type: CanvasObject['type']) => {
    e.dataTransfer.setData('objectType', type);
  };

  // Обработка сброса (Drop) на холст
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    
    // Получаем текущие координаты мыши относительно холста
    stageRef.current.setPointersPositions(e);
    const pointerPos = stageRef.current.getPointerPosition();

    const type = e.dataTransfer.getData('objectType') as CanvasObject['type'];

    if (pointerPos) {
      const newObj: CanvasObject = {
        id: Date.now().toString(),
        type,
        x: pointerPos.x,
        y: pointerPos.y,
      };
      setObjects([...objects, newObj]);
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
      {/* Левая панель инструментов (Tailwind) */}
      <div className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col gap-4 z-10 shadow-lg">
        <h2 className="font-bold text-lg mb-2 text-gray-700">Инструменты</h2>
        
        <div
          draggable
          onDragStart={(e) => handleDragStart(e, 'room')}
          className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg cursor-grab hover:bg-blue-100 transition-colors"
        >
          <Square className="text-blue-600" />
          <span className="text-sm font-medium">Комната</span>
        </div>

        <div
          draggable
          onDragStart={(e) => handleDragStart(e, 'wall')}
          className="flex items-center gap-3 p-3 bg-orange-50 border border-orange-200 rounded-lg cursor-grab hover:bg-orange-100 transition-colors"
        >
          <Pipette className="rotate-45 text-orange-600" />
          <span className="text-sm font-medium">Стена</span>
        </div>

        <div
          draggable
          onDragStart={(e) => handleDragStart(e, 'furniture')}
          className="flex items-center gap-3 p-3 bg-purple-50 border border-purple-200 rounded-lg cursor-grab hover:bg-purple-100 transition-colors"
        >
          <Sofa className="text-purple-600" />
          <span className="text-sm font-medium">Мебель</span>
        </div>

        <p className="mt-auto text-xs text-gray-400 italic">
          Перетащите иконку на холст справа
        </p>
      </div>

      {/* Зона холста */}
      <div 
        className="flex-1 relative bg-[url('https://transparenttextures.com')]"
        onDragOver={(e) => e.preventDefault()} // Обязательно для разрешения Drop
        onDrop={handleDrop}
      >
        <Stage
          width={window.innerWidth - 256} // Минус ширина панели
          height={window.innerHeight}
          ref={stageRef}
        >
          <Layer>
            {objects.map((obj) => (
              <Group key={obj.id} x={obj.x} y={obj.y} draggable>
                {obj.type === 'room' && (
                  <Rect width={500} height={500} fill="rgba(59, 130, 246, 0.3)" stroke="#3b82f6" strokeWidth={2} />
                )}
                {obj.type === 'wall' && (
                  <Rect width={300} height={10} fill="#f97316" cornerRadius={5} />
                )}
                {obj.type === 'furniture' && (
                  <Circle radius={30} fill="#a855f7" stroke="#7e22ce" strokeWidth={1} />
                )}
                <Text 
                  text={obj.type} 
                  fontSize={10} 
                  y={obj.type === 'wall' ? 15 : -15} 
                  fill="#666" 
                />
              </Group>
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};