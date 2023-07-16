## Hace todos los puntos pedidos (40%)

#### El nombre del repositorio es el correcto (mdas-api-${nombre}_${apellido})

OK

#### Permite obtener los detalles de un pokemon vía endpoint (datos + número de veces que se ha marcado como favorito)

OK

#### Actualiza el contador de favoritos vía eventos

- Según el código sí, pero no funciona el endpoint de añadir favoritos; siempre da el mismo
  error: `Pokemon cannot be added to favorites of an unexistent user`

#### ¿Se controlan las excepciones de dominio? Y si se lanza una excepción desde el dominio, ¿se traduce en infraestructura a un código HTTP?

OK

#### Tests unitarios

OK, aunque hay muchos tests que no testean nada... únicamente llaman a la función `toBeDefined`

#### Tests de aceptación

KO

#### Tests de integración

OK

**Puntuación: 28/40**

## Se aplican conceptos explicados (50%)

#### Separación correcta de capas (application, domain, infrastructure + BC/module/layer)

- En el caso de uso `AddPokemonToUserFavouritesUseCase` la lógica de añadir un pokemon (`addFavouritePokemon`) se hace
  sobre el repositorio (infraestructura), no sobre dominio. La cláusula de guarda que comprueba si existe un usuario,
  debería pertenecer al propio caso de uso.
- El método `addFavouritePokemon` del repositorio `UserRepositoryInterface` no debería devolver el agregado, su
  responsabilidad es añadir, no añadir y obtener ;-)

#### Aggregates + VOs

OK

#### No se trabajan con tipos primitivos en dominio

OK

#### Hay use cases en aplicación reutilizables

OK

#### Se aplica el patrón repositorio

OK

#### Se usan subscribers

OK

#### Se lanzan eventos de dominio

OK

#### Se utilizan object mothers
KO

**Puntuación: 42/50**

## Facilidad setup + README (10%)

#### El README contiene al menos los apartados ""cómo ejecutar la aplicación"", ""cómo usar la aplicación""

OK

#### Es sencillo seguir el apartado ""cómo ejecutar la aplicación""

OK

**Puntuación: 10/10**

## Observaciones

- Una buena práctica en los repositorios es tener un método save (no un update o un
  create): `this.pokemonRepository.update(pokemon);`
- Imports que no se utilizan

**PUNTUACIÓN FINAL: 80/100**
