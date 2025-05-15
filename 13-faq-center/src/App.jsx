import { FoldVertical, UnfoldVertical } from 'lucide-react';
import { useEffect, useState } from 'react';
import ThemeToggler from './components/ThemeToggler';
import { ThemeProvider } from './contexts/ThemeContext';
import ListItem from './components/ListItem';
import { selfImprovementFAQs } from './data';

function App() {
  const [questions, setQuestions] = useState(selfImprovementFAQs);
  const [isExpanded, setIsExpanded] = useState(false);

  const updateQuestionsStatus = (id) => {
    const updated = questions.map((question) => ({
      ...question,
      isOpened: id === question.id ? !question.isOpened : question.isOpened,
    }));
    setQuestions(updated);
  };

  useEffect(() => {
    setQuestions((prev) =>
      prev.map((question) => ({
        ...question,
        isOpened: isExpanded,
      }))
    );
  }, [isExpanded]);

  return (
    <ThemeProvider>
      <div className="min-h-screen container sm:mx-auto sm:px-4 flex flex-col gap-16">
        <header className="flex flex-col items-center text-center gap-4 pt-12">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            FAQ Center
          </h1>
          <p className="max-w-xl mx-auto px-4 sm:px-8">
            Find answers to the most common questions about{' '}
            <span className="bg-gradient-to-br from-secondary to-primary  text-transparent bg-clip-text font-semibold">
              Self-improvement
            </span>{' '}
            and{' '}
            <span className="bg-gradient-to-br from-primary to-secondary text-transparent bg-clip-text font-semibold">
              Discipline
            </span>
            .
          </p>
        </header>

        <main className="w-full sm:w-[600px] px-2 sm:mx-auto flex flex-col gap-5 pt-2 pb-20">
          {/* Top Part */}
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2 px-1">
            <h2 className="sm:text-xl font-extrabold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Frequently Asked Questions
            </h2>

            <div className="flex items-center justify-between gap-2">
              <button
                aria-label="Expand or Collapse All Questions"
                onClick={() => setIsExpanded((prev) => !prev)}
                className="flex items-center gap-1 text-xs font-semibold  px-2 py-[6px] rounded cursor-pointer 
                  bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
              >
                {isExpanded ? (
                  <>
                    <UnfoldVertical className="w-4 h-4" aria-hidden="true" />
                    <span>Expand All</span>
                  </>
                ) : (
                  <>
                    <FoldVertical className="w-4 h-4" aria-hidden="true" />
                    <span>Collapse All</span>
                  </>
                )}
              </button>
              <ThemeToggler />
            </div>
          </header>

          {/* Bottom Part */}
          <div className="rounded-2xl border border-foreground/10 shadow shadow-foreground/10 overflow-hidden">
            <ul className="flex flex-col">
              {questions.map((item) => (
                <ListItem
                  key={item.id}
                  item={item}
                  updateQuestionsStatus={updateQuestionsStatus}
                />
              ))}
            </ul>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
