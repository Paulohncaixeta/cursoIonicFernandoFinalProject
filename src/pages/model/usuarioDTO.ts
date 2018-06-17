export class UsuarioDto {
    
      private _IdUsuario: number;
      private _nomeUsuario : String;
      private _senhaUsuario : String;
    
      constructor() {
      }

    /**
     * Getter IdUsuario
     * @return {number}
     */
	public get IdUsuario(): number {
		return this._IdUsuario;
	}

    /**
     * Getter nomeUsuario
     * @return {String}
     */
	public get nomeUsuario(): String {
		return this._nomeUsuario;
	}

    /**
     * Getter senhaUsuario
     * @return {String}
     */
	public get senhaUsuario(): String {
		return this._senhaUsuario;
	}

    /**
     * Setter IdUsuario
     * @param {number} value
     */
	public set IdUsuario(value: number) {
		this._IdUsuario = value;
	}

    /**
     * Setter nomeUsuario
     * @param {String} value
     */
	public set nomeUsuario(value: String) {
		this._nomeUsuario = value;
	}

    /**
     * Setter senhaUsuario
     * @param {String} value
     */
	public set senhaUsuario(value: String) {
		this._senhaUsuario = value;
	}
    
      
    }