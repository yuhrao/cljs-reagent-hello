goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__28495__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__28495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28496__i = 0, G__28496__a = new Array(arguments.length -  0);
while (G__28496__i < G__28496__a.length) {G__28496__a[G__28496__i] = arguments[G__28496__i + 0]; ++G__28496__i;}
  args = new cljs.core.IndexedSeq(G__28496__a,0,null);
} 
return G__28495__delegate.call(this,args);};
G__28495.cljs$lang$maxFixedArity = 0;
G__28495.cljs$lang$applyTo = (function (arglist__28497){
var args = cljs.core.seq(arglist__28497);
return G__28495__delegate(args);
});
G__28495.cljs$core$IFn$_invoke$arity$variadic = G__28495__delegate;
return G__28495;
})()
);

(o.error = (function() { 
var G__28498__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__28498 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28499__i = 0, G__28499__a = new Array(arguments.length -  0);
while (G__28499__i < G__28499__a.length) {G__28499__a[G__28499__i] = arguments[G__28499__i + 0]; ++G__28499__i;}
  args = new cljs.core.IndexedSeq(G__28499__a,0,null);
} 
return G__28498__delegate.call(this,args);};
G__28498.cljs$lang$maxFixedArity = 0;
G__28498.cljs$lang$applyTo = (function (arglist__28500){
var args = cljs.core.seq(arglist__28500);
return G__28498__delegate(args);
});
G__28498.cljs$core$IFn$_invoke$arity$variadic = G__28498__delegate;
return G__28498;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
