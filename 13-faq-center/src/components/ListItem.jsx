import { Minus, Plus } from 'lucide-react';

function ListItem({ item, updateQuestionsStatus }) {
  return (
    <li className="flex flex-col bg-foreground/1 border-b border-primary/25">
      {/* Question */}
      <div
        className={`flex items-center justify-between gap-1 py-6 px-4 transition-colors duration-400 ${
          item.isOpened
            ? 'bg-primary/12 text-foreground/90 rounded-b-md'
            : 'bg-primary/4 text-foreground/85'
        }`}
      >
        <p className={`text-sm font-medium wrap-break-word `}>
          {item.question}
        </p>
        <button
          aria-label="Expand or Collapse The Question"
          onClick={() => updateQuestionsStatus(item.id)}
          className="flex items-center justify-center cursor-pointer bg-foreground/10 hover:bg-foreground/30 text-foreground/85 rounded-full p-1"
        >
          {item.isOpened ? (
            <Minus className="w-4 h-4" aria-hidden="true" />
          ) : (
            <Plus className="w-4 h-4" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Answer */}
      <p
        className={`text-sm leading-7 text-foreground/85 px-4 transition-all duration-200 overflow-hidden  ${
          item.isOpened
            ? 'py-6 max-h-fit opacity-100'
            : 'py-0 max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        {item.answer}
      </p>
    </li>
  );
}

export default ListItem;
