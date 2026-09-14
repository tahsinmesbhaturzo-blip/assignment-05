My project name is Dev Stack

*Dev Stack* is a web application where developers can explore different technologies and choose the ones they want for their development stack. Each technology includes useful information such as its category, difficulty level, rating, and description.

I built the project with react.Js, Typescript ,tailwind,API call with Fletch, daisyUI, react icon, responsive, component & a little CSS.

1.Users can select technologies what they need.  
2.They can remove single technologies from their stack. 
3. Also they can remove all technologies from their stack which they selected.

Answer no.1
JSX is Javascript extension. It's allow us to write HTML in JavaScript. In React we use JSX  for creating UI components.

Answer no.2
Props are used to pass data from parent component to child component. &
State is store data in a component but when the the data is change it's re-renders.

Answer no.3
useState is a React Hook that allows us to create and manage state in a component.
In my project, I used useState to keep track of the technologies selected by the user. When a user adds or removes a technology, the state updates and the UI also updates automatically.

Answer no.4
useEffect is used to perform side effects in a React component, such as fetching data from an API or JSON file.But i use 'use hook' in my project.

Answer no.5
When we render a list using map method, React needs a unique key for each item. It helps React identify which item has changed, added, or removed.

Answer no.6
Conditional rendering means showing different UI based on a condition.

In my project, I used conditional rendering for the selected technology stack. If there are no selected technologies, I show an empty stack message. If there are selected technologies, I show the selected technology list.
//code-->
            {
                selectedTechnologies.length === 0 ? (
                    <div className="border border-dashed border-gray-300 rounded-lg py-8 mt-4 text-center">
                        <p className="text-sm text-gray-400">
                            Your stack is empty.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="space-y-2 mt-4">
                            {
                                selectedTechnologies.map((technology) => (
                                    <div
                                        key={technology.id}
                                        className="flex items-center justify-between border border-gray-200 rounded-lg p-3"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={technology.icon}
                                                alt={technology.name}
                                                className="w-8 h-8 object-contain"
                                            />
                                            <div>
                                                <h3 className="text-sm font-medium">
                                                    {technology.name}
                                                </h3>
                                                <p className="text-xs text-gray-400">
                                                    {technology.category}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => onRemove(technology.id)}
                                            className="text-sm cursor-pointer"
                                        >
                                            ❌
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                   <button
                  onClick={onRemoveAll}
              className="cursor-pointer w-full border border-red-300 text-red-500 font-bold py-2 rounded-lg mt-5 hover:bg-red-50"
              >
               Remove All
          </button>
      </>
Answer no.7
We pass data from a parent to a child using props.
<!-- <TechnologyCard onAdd={handleAdd} /> -->

i pass a function as a props (child to parent)
onAdd={handleAddToStack}
