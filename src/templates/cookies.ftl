<!-- Modal aviso de cookies -->
<div id="modal-cookies" class="evr-cookies__modal maxwidth" style="display:none;">

	<div class="">
		<#--  <div class="maxwidth maxwidth--inner">  -->

		<!--  JUNTA logo -->
		<#--  <div class="evr-cookies__header">
			<a class="evr-cookies__log" href="${urlGroup}" title="<@liferay.language_format arguments=" ${site_name}" key="go-to-x" />">
				<figure class="evr-cookies__fig">
					<img class="evr-cookies__img" alt="${logo_description}" src="${images_folder}/logo_espaciosNaturales_simple.png" />
				</figure>
			</a>
		</div>  -->
	

		<!--  Info Cookies -->
		<div class="evr-cookies__body">
			<div class="evr-cookies__block">
				<p class="evr-cookies__description">
					<@liferay.language key="cookies.description" />
					<a class="evr-cookies__link" href="${politicaCookies}" target="_blank"><@liferay.language key="politica.cookies"/></a>	
					<@liferay.language key="cookies.parrafo" /> <a class="detalle__link">AQUI</a>		   
                </p>
				<div class="evr-cookies__button-group">
					<button id="accept-cookies" type="button" class="evr-cookies__button"><@liferay.language key='cookies.button.accept'/></button>
				</div>
			</div>
			<div class="evr-cookies__collapse">
				<h1 class="evr-cookies__subtitle"><@liferay.language key="cookies.opciones" /></h1>

				<div class="evr-cookies__item">
					<input id="cookies-general" type="checkbox" class="evr-cookies__check" checked disabled>
					<label for="cookies-general" class="evr-cookies__label">
						<@liferay.language key="cookies.title.general" />
						<span class="evr-cookies__checked"><@liferay.language key="cookies.activado" /></span>
					</label>
					<p class="evr-cookies__info"><@liferay.language key="cookies.description.general" /><p>
				</div>

				<div class="evr-cookies__item">
					<input id="cookies-statistics" type="checkbox" class="evr-cookies__check">
					<label for="cookies-statistics" class="evr-cookies__label">
						<@liferay.language key="cookies.title.statistics" />
						<span class="evr-cookies__checked"><@liferay.language key="cookies.activado" /></span>
					</label>
					<p class="evr-cookies__info"><@liferay.language key="cookies.description.statistics" /><p>
				</div>

				<div class="evr-cookies__item">
					<input id="cookies-customization" type="checkbox" class="evr-cookies__check">
					<label for="cookies-customization" class="evr-cookies__label">
						<@liferay.language key="cookies.title.customization" />
						<span class="evr-cookies__checked"><@liferay.language key="cookies.activado" /></span>
					</label>
					<p class="evr-cookies__info"><@liferay.language key="cookies.description.customization" /><p>
				</div>
			</div>
		</div>

		
	</div>
</div>

<script type="text/javascript">
    $(".detalle__link").click(function(){
    	if ($('.evr-cookies__collapse').is(':hidden')) { 
    	$('.evr-cookies__collapse').show();
    	}else{
    	$('.evr-cookies__collapse').hide();
    	}
    })
</script>