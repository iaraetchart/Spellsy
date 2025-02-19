function Box(props) {
  let state = "text-black border-2 border-gray-300 dark:text-white";
  if (props.state === "C") state = "bg-emerald-500 text-white";
  if (props.state === "E") state = "bg-amber-500 text-white";
  if (props.state === "N") state = "bg-zinc-500 text-white dark:bg-gray-700";

  return (
    <div
      className={
        "w-8 h-8 sm:w-10 sm:h-10 grid place-items-center p-0 m-0 font-bold text-lg sm:text-2xl " + state
      }
    >
      {props.value}
    </div>
  );
}

function Help() {
  return (
    <>
      <p className="text-left text-sm sm:text-base py-5 font-regular opacity-75 mr-1">
        Guess the word in six tries.
        <br />
        Each guess must be a valid five-letter word. Hit the enter button to
        submit.
        <br /> After each guess, the color of the tiles will change to show how
        close your guess was to the word.
      </p>
      <hr />
      <h3 className="text-left font-bold py-5">Examples</h3>
      <div className="flex gap-1">
        <Box value="S" state="C" />
        <Box value="W" />
        <Box value="E" />
        <Box value="E" />
        <Box value="T" />
      </div>
      <p className="text-left text-sm sm:text-base py-2 opacity-75">
        The letter <b>S</b> is in the word and in the correct spot.
      </p>
      <div className="flex gap-1">
        <Box value="R" />
        <Box value="E" />
        <Box value="A" state="E" />
        <Box value="C" />
        <Box value="T" />
      </div>
      <p className="text-left text-sm sm:text-base py-2 opacity-75">
        The letter <b>A</b> is in the word but not in the correct spot.
      </p>
      <div className="flex gap-1">
        <Box value="B" />
        <Box value="O" state="N" />
        <Box value="A" />
        <Box value="R" />
        <Box value="D" />
      </div>
      <p className="text-left text-sm sm:text-base py-2 opacity-75">
        The letter <b>O</b> is not in the word.
      </p>
    </>
  );
}

export default Help;
