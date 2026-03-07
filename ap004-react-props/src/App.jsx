const App = () => {
  return (
    <div className="container border">
      <div className="row">
        <div className="col-12">
          {/* i.fa-solid.fa-hippo */}
          <i className="fa-solid fa-hippo fa-2x"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col col-xl-3">
          {/* .card>(.card-header+.card-body) */}
          <div className="card">
            <div className="card-header text-muted">14/06/2025</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-book fa-2x"></i>
              </div>
              {/* div>(h4.text-center+p.text-center) */}
              <div className="border flex-grow-1 rounded p-3">
                <h4 className="text-center">Livro</h4>
                <p className="text-center">Um bom livro</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col col-xl-3">
          <div className="card">
            <div className="card-header text-muted">11/06/2025</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-pencil fa-2x"></i>
              </div>
              {/* div>(h4.text-center+p.text-center) */}
              <div className="border flex-grow-1 rounded p-3">
                <h4 className="text-center">Lápis</h4>
                <p className="text-center">Um bom lápis</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col col-xl-3">
          <div className="card">
            <div className="card-header text-muted">10/06/2025</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-bicycle fa-2x"></i>
              </div>
              {/* div>(h4.text-center+p.text-center) */}
              <div className="border flex-grow-1 rounded p-3">
                <h4 className="text-center">Bicileta</h4>
                <p className="text-center">Uma boa bicicleta</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col col-xl-3">
          <div className="card">
            <div className="card-header text-muted">14/06/2025</div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-hippo fa-2x"></i>
              </div>
              {/* div>(h4.text-center+p.text-center) */}
              <div className="border flex-grow-1 rounded p-3">
                <h4 className="text-center">Hipopótamo</h4>
                <p className="text-center">Um bom Hipopótamo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App