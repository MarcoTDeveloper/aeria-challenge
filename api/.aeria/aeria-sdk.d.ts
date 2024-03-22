import type {
  InferProperty,
  InferResponse,
  SchemaWithId,
  MakeEndpoint,
  RequestMethod,
  CollectionFunctionsPaginated

} from '@aeriajs/types'

declare type MirrorDescriptions = {
  "user": {
    "$id": "user",
    "required": [
      "name",
      "roles",
      "email"
    ],
    "form": [
      "name",
      "active",
      "roles",
      "email",
      "phone_number",
      "picture_file"
    ],
    "indexes": [
      "name"
    ],
    "freshItem": {
      "active": true
    },
    "properties": {
      "name": {
        "type": "string"
      },
      "given_name": {
        "readOnly": true
      },
      "family_name": {
        "readOnly": true
      },
      "active": {
        "type": "boolean"
      },
      "roles": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "uniqueItems": true
      },
      "email": {
        "type": "string",
        "inputType": "email",
        "unique": true
      },
      "password": {
        "type": "string",
        "inputType": "password",
        "hidden": true
      },
      "phone_number": {
        "type": "string",
        "mask": "(##) #####-####"
      },
      "picture_file": {
        "$ref": "file",
        "accept": [
          "image/*"
        ],
        "indexes": [
          "filename",
          "link",
          "mime"
        ]
      },
      "picture": {
        "readOnly": true
      },
      "group": {
        "type": "string"
      },
      "self_registered": {
        "type": "boolean",
        "readOnly": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "presets": [
      "crud",
      "view",
      "duplicate"
    ],
    "layout": {
      "name": "grid",
      "options": {
        "title": "name",
        "badge": "roles",
        "picture": "picture_file",
        "information": "email",
        "active": "active",
        "translateBadge": true
      }
    },
    "individualActions": {
      "ui:spawnEdit": {
        "name": "action.edit",
        "icon": "pencil-simple",
        "translate": true
      },
      "route:/dashboard/user/changepass": {
        "name": "change_password",
        "icon": "key",
        "translate": true,
        "fetchItem": true
      },
      "remove": {
        "name": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      },
      "ui:spawnView": {
        "name": "action.view",
        "icon": "magnifying-glass-plus",
        "translate": true
      },
      "ui:duplicate": {
        "name": "action.duplicate",
        "icon": "copy",
        "translate": true
      }
    },
    "icon": "users",
    "filters": [
      "name",
      "roles",
      "email",
      "phone_number"
    ],
    "table": [
      "name",
      "roles",
      "picture_file",
      "active",
      "updated_at"
    ],
    "tableMeta": [
      "email"
    ],
    "formLayout": {
      "fields": {
        "given_name": {
          "span": 3
        },
        "family_name": {
          "span": 3
        }
      }
    },
    "actions": {
      "ui:spawnAdd": {
        "name": "action.add",
        "icon": "plus",
        "translate": true,
        "button": true
      }
    }
  },
  "file": {
    "$id": "file",
    "owned": "always",
    "presets": [
      "owned"
    ],
    "indexes": [
      "filename",
      "link",
      "mime"
    ],
    "properties": {
      "mime": {
        "type": "string"
      },
      "size": {
        "type": "number"
      },
      "last_modified": {
        "type": "string",
        "format": "date-time"
      },
      "filename": {
        "type": "string"
      },
      "absolute_path": {
        "type": "string"
      },
      "relative_path": {
        "type": "string"
      },
      "immutable": {
        "type": "boolean"
      },
      "link": {
        "readOnly": true
      },
      "download_link": {
        "readOnly": true
      },
      "owner": {
        "$ref": "user",
        "noForm": true,
        "indexes": [
          "name"
        ]
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "actions": {
      "deleteAll": {
        "name": "Remover",
        "ask": true,
        "selection": true
      }
    },
    "individualActions": {
      "remove": {
        "name": "Remover",
        "icon": "trash",
        "ask": true
      }
    }
  },
  "tempFile": {
    "$id": "tempFile",
    "temporary": {
      "index": "created_at",
      "expireAfterSeconds": 3600
    },
    "properties": {
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "absolute_path": {
        "type": "string"
      },
      "size": {
        "type": "number"
      },
      "mime": {
        "type": "number"
      },
      "collection": {
        "type": "string"
      },
      "filename": {
        "type": "string"
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    }
  },
  "log": {
    "$id": "log",
    "required": [
      "context",
      "message"
    ],
    "properties": {
      "owner": {
        "$ref": "user",
        "noForm": true,
        "indexes": [
          "name"
        ]
      },
      "context": {
        "type": "string"
      },
      "message": {
        "type": "string"
      },
      "details": {
        "type": "object",
        "variable": true
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "icon": "magnifying-glass",
    "presets": [
      "view"
    ],
    "filters": [
      "context",
      "message",
      "owner"
    ],
    "individualActions": {
      "ui:spawnView": {
        "name": "action.view",
        "icon": "magnifying-glass-plus",
        "translate": true
      }
    }
  },
  "resourceUsage": {
    "$id": "resourceUsage",
    "required": [],
    "properties": {
      "hits": {
        "type": "integer"
      },
      "last_maximum_reach": {
        "type": "string",
        "format": "date-time"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    }
  },
  "person": {
    "$id": "person",
    "icon": "person",
    "required": [
      "name",
      "email",
      "phone",
      "type"
    ],
    "properties": {
      "name": {
        "type": "string",
        "description": "Nome"
      },
      "document": {
        "type": "string",
        "description": "CPF / CNPJ"
      },
      "email": {
        "type": "string",
        "description": "Email"
      },
      "phone": {
        "type": "string",
        "description": "Telefone"
      },
      "type": {
        "enum": [
          "Cliente"
        ],
        "description": "Tipo"
      },
      "ie": {
        "type": "string",
        "description": "Inscrição estadual"
      },
      "animal": {
        "type": "array",
        "items": {
          "$ref": "animal",
          "indexes": [
            "name"
          ]
        },
        "description": "Animal"
      },
      "address": {
        "$ref": "geolocation",
        "inline": true,
        "description": "Endereço"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "presets": [
      "crud"
    ],
    "actions": {
      "ui:spawnAdd": {
        "name": "action.add",
        "icon": "plus",
        "translate": true,
        "button": true
      }
    },
    "individualActions": {
      "ui:spawnEdit": {
        "name": "action.edit",
        "icon": "pencil-simple",
        "translate": true
      },
      "remove": {
        "name": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    }
  },
  "animal": {
    "$id": "animal",
    "icon": "dog",
    "required": [
      "name"
    ],
    "properties": {
      "name": {
        "type": "string",
        "description": "Nome"
      },
      "age": {
        "type": "number",
        "description": "Idade"
      },
      "pictures": {
        "$ref": "file",
        "accept": [
          "image/*"
        ],
        "description": "Foto",
        "indexes": [
          "filename",
          "link",
          "mime"
        ]
      },
      "breed": {
        "type": "string",
        "description": "Raça"
      },
      "species": {
        "type": "string",
        "description": "Especie"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "presets": [
      "crud"
    ],
    "actions": {
      "ui:spawnAdd": {
        "name": "action.add",
        "icon": "plus",
        "translate": true,
        "button": true
      }
    },
    "individualActions": {
      "ui:spawnEdit": {
        "name": "action.edit",
        "icon": "pencil-simple",
        "translate": true
      },
      "remove": {
        "name": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    }
  },
  "checkin": {
    "$id": "checkin",
    "icon": "check-circle",
    "required": [
      "animal",
      "weight",
      "type",
      "reason"
    ],
    "properties": {
      "animal": {
        "$ref": "animal",
        "indexes": [
          "animal",
          "name"
        ],
        "description": "Animal"
      },
      "weight": {
        "type": "number",
        "description": "Peso (Kg)"
      },
      "temperature": {
        "type": "number",
        "description": "Temperatura (Cº)"
      },
      "type": {
        "description": "Tipo",
        "enum": [
          "Rotina",
          "Emergência"
        ]
      },
      "reason": {
        "type": "string",
        "description": "Motivo"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "presets": [
      "crud"
    ],
    "actions": {
      "ui:spawnAdd": {
        "name": "action.add",
        "icon": "plus",
        "translate": true,
        "button": true
      }
    },
    "individualActions": {
      "ui:spawnEdit": {
        "name": "action.edit",
        "icon": "pencil-simple",
        "translate": true
      },
      "remove": {
        "name": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    }
  },
  "transaction": {
    "$id": "transaction",
    "icon": "money",
    "required": [
      "type",
      "value"
    ],
    "properties": {
      "type": {
        "enum": [
          "Credito",
          "Debito"
        ],
        "description": "Tipo"
      },
      "value": {
        "type": "number",
        "description": "Valor (R$)"
      },
      "invoice": {
        "type": "string",
        "description": "Fatura"
      },
      "description": {
        "type": "string",
        "description": "Descrição",
        "element": "textarea"
      },
      "paid": {
        "type": "boolean",
        "description": "Pago"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "presets": [
      "crud"
    ],
    "actions": {
      "ui:spawnAdd": {
        "name": "action.add",
        "icon": "plus",
        "translate": true,
        "button": true
      }
    },
    "individualActions": {
      "ui:spawnEdit": {
        "name": "action.edit",
        "icon": "pencil-simple",
        "translate": true
      },
      "remove": {
        "name": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    }
  },
  "appointment": {
    "$id": "appointment",
    "icon": "clock-countdown",
    "required": [
      "client",
      "date",
      "reason"
    ],
    "properties": {
      "client": {
        "$ref": "person",
        "inline": true,
        "description": "Cliente"
      },
      "date": {
        "type": "string",
        "format": "date-time",
        "description": "Horário"
      },
      "reason": {
        "type": "string",
        "description": "Motivo"
      },
      "complement": {
        "type": "string",
        "element": "textarea",
        "description": "Descrição"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "presets": [
      "crud"
    ],
    "actions": {
      "ui:spawnAdd": {
        "name": "action.add",
        "icon": "plus",
        "translate": true,
        "button": true
      }
    },
    "individualActions": {
      "ui:spawnEdit": {
        "name": "action.edit",
        "icon": "pencil-simple",
        "translate": true
      },
      "remove": {
        "name": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    }
  },
  "geolocation": {
    "$id": "geolocation",
    "icon": "address-book",
    "required": [
      "country",
      "zip_code",
      "country",
      "state",
      "district",
      "number"
    ],
    "properties": {
      "zip_code": {
        "type": "string",
        "description": "CEP"
      },
      "country": {
        "type": "string",
        "description": "País"
      },
      "state": {
        "type": "string",
        "description": "Estado"
      },
      "district": {
        "type": "string",
        "description": "Distrito"
      },
      "number": {
        "type": "string",
        "description": "Número"
      },
      "complement": {
        "type": "string",
        "element": "textarea",
        "description": "Complemento"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      },
      "updated_at": {
        "type": "string",
        "format": "date-time",
        "noForm": true,
        "readOnly": true,
        "isTimestamp": true
      }
    },
    "presets": [
      "crud"
    ],
    "actions": {
      "ui:spawnAdd": {
        "name": "action.add",
        "icon": "plus",
        "translate": true,
        "button": true
      }
    },
    "individualActions": {
      "ui:spawnEdit": {
        "name": "action.edit",
        "icon": "pencil-simple",
        "translate": true
      },
      "remove": {
        "name": "action.remove",
        "icon": "trash",
        "ask": true,
        "translate": true
      }
    }
  }
}


declare type MirrorRouter = {
  "/user/get": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/getAll": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/remove": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/upload": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/removeFile": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/insert": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/authenticate": {
    "POST": {
      "roles": [
        "root",
        "guest"
      ]
    }
  },
  "/user/activate": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/createAccount": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/getInfo": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/user/getActivationLink": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/file/get": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/file/insert": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/file/download": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/file/remove": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/file/removeAll": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/log/get": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/log/getAll": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/log/insert": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/person/get": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/person/getAll": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/person/insert": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/person/remove": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/animal/get": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/animal/getAll": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/animal/upload": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/animal/insert": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/animal/remove": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/checkin/get": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/checkin/getAll": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/checkin/insert": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/checkin/remove": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/transaction/get": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/transaction/getAll": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/transaction/insert": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/transaction/remove": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/appointment/get": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/appointment/getAll": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/appointment/insert": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/appointment/remove": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/geolocation/get": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/geolocation/getAll": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/geolocation/insert": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/geolocation/remove": {
    "POST": {
      "roles": [
        "root"
      ]
    }
  },
  "/searchCheckins": {
    "GET": null
  },
  "/transactionsBalance": {
    "GET": null
  }
}


declare global {
  type Collections = {
    [K in keyof MirrorDescriptions]: {
      item: SchemaWithId<MirrorDescriptions[K]>
    }
  }
}

declare module 'aeria-sdk' {
  import { TopLevelObject, TLOFunctions } from 'aeria-sdk'

  type UnionToIntersection<T> = (T extends any ? ((x: T) => 0) : never) extends ((x: infer R) => 0)
    ? R
    : never

  type InferEndpoint<Route extends keyof MirrorRouter> = {
    [Method in keyof MirrorRouter[Route]]: Method extends RequestMethod
      ? MirrorRouter[Route][Method] extends infer Contract
        ? Contract extends
        | { response: infer RouteResponse }
        | { payload: infer RoutePayload  }
        | { query: infer RoutePayload  }
          ? MakeEndpoint<
            Route,
            Method,
            InferResponse<RouteResponse>,
            RoutePayload extends {}
              ? InferProperty<RoutePayload>
              : undefined
          >
          : MakeEndpoint<Route, Method>
        : never
      : never
    } extends infer Methods
      ? Methods[keyof Methods]
      : never

  type Endpoints = {
    [Route in keyof MirrorRouter]: Route extends `/${infer Coll}/${infer Fn}`
      ? Coll extends keyof Collections
        ? Fn extends keyof CollectionFunctionsPaginated<any>
          ? Record<Coll, Record<
              Fn, {
              POST: CollectionFunctionsPaginated<SchemaWithId<MirrorDescriptions[Coll]>>[Fn]
            }
            >>
          : InferEndpoint<Route>
        : InferEndpoint<Route>
      : InferEndpoint<Route>
  } extends infer Endpoints
    ? UnionToIntersection<Endpoints[keyof Endpoints]>
    : never

  type StrongelyTypedTLO = TopLevelObject & Endpoints

  export const url: string
  export const aeria: StrongelyTypedTLO
}

