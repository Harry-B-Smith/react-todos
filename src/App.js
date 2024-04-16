import './App.css';

function App() {
  return (
    <div className="mt-5 container"> 
      <div className="card"> {/* Add Bootstrap row class */}
        <div className="card-header"> {/* Add Bootstrap column class */}
          <h1 className="text-center">Your Todo's</h1> {/* Add Bootstrap text-center class */}
        </div>
        <div className="col">
          <table className="table"> {/* Add Bootstrap table class */}
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Feed Dog</td>
                <td>Eric</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Get Haircut</td>
                <td>Eric</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
