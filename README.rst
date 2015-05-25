============
widget-party
============

A django-dashing_ widget pack

.. _django-dashing: https://github.com/talpor/django-dashing/

Quick start
-----------

#. Add "widget_party" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = (
        ...
        'widget_party',
    )

#. Include the widgets you'd like to use to your django-dashing `settings.py` entry::

    # Django Dashing Configuration
    DASHING = {
        'REPOSITORY': 'https://cdn.rawgit.com/talpor/django-dashing-channel/master/repositories.json',
        'INSTALLED_WIDGETS': (
            'list',
            'graph',
            'number',
            ...
            'assignment',
            'buildstatus',
            'commitlist',
            'fatlist',
            'fatnumber',
            'informednumber',
            'linklist',
            'sizednumber',
            'skinnylist',
        ),
        'PERMISSION_CLASSES':  (
    ...

#. DONE.


Demo
----

A turn-key demo is available at https://github.com/mverteuil/widget-party-demo

You can use the demo to help choose which widgets you'd like to use, play with them, and quickly determine their suitability and limits.

.. image:: https://www.evernote.com/l/ASXKotf9zRBK4otep00z4TNydEMSqN4ZfqcB/image.png

.. image:: https://www.evernote.com/l/ASWfnEhpGDZPwL2S8FN0Ly3eVifqSpwbiTgB/image.png
