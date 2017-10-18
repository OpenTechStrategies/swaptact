from django.apps import AppConfig


class STREETCRMAppConfig(AppConfig):
    name = 'streetcrm'

    def ready(self):
        import streetcrm.signals
