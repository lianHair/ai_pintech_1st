import Button from "./Button";
import ButtonWan from "./ButtonWan";

function App() {
  return (
    <main>
      <ButtonWan
        columnNumber={3}
        component={
          <>
            <Button backgroundColor="primary" borderRadius="smooth" />
            <Button backgroundColor="primary" borderRadius="hard" />
            <Button backgroundColor="primary" borderRadius="circle" />
            <Button backgroundColor="hover" borderRadius="smooth" />
            <Button backgroundColor="hover" borderRadius="hard" />
            <Button backgroundColor="hover" borderRadius="circle" />
            <Button backgroundColor="deactive" borderRadius="smooth" />
            <Button backgroundColor="deactive" borderRadius="hard" />
            <Button backgroundColor="deactive" borderRadius="circle" />
          </>
        }
      />
    </main>
  );
}

export default App;
